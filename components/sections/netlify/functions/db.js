/**
 * Database connection management
 * @module db
 */

require('dotenv').config();
const mysql = require('mysql2/promise');
const { DB_CONFIG } = require('./constants');

let pool = null;

/**
 * Get database connection pool
 * @returns {Object} MySQL connection pool
 */
function getPool() {
    if (!pool) {
        const config = {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT || 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            waitForConnections: DB_CONFIG.WAIT_FOR_CONNECTIONS,
            connectionLimit: DB_CONFIG.CONNECTION_LIMIT,
            queueLimit: DB_CONFIG.QUEUE_LIMIT,
            acquireTimeout: 60000,
            idleTimeout: 300000,
            reconnect: true,
            charset: 'utf8mb4',
            timezone: 'Z'
        };

        // Validate required environment variables
        const requiredEnvVars = ['DB_HOST', 'DB_USER', 'DB_PASS', 'DB_NAME'];
        const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
        
        if (missingVars.length > 0) {
            throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
        }

        pool = mysql.createPool(config);

        // Test the connection in production
        if (process.env.NODE_ENV === 'production') {
            pool.getConnection()
                .then(connection => {
                    console.log('[DB] Connection pool established successfully');
                    connection.release();
                })
                .catch(err => {
                    console.error('[DB] Failed to establish connection pool:', err.message);
                    throw err;
                });
        }
    }
    
    return pool;
}

/**
 * Execute a database query with error handling
 * @param {string} sql - SQL query
 * @param {Array} params - Query parameters
 * @returns {Promise<Array>} Query results
 */
async function executeQuery(sql, params = []) {
    const startTime = Date.now();
    const connection = getPool();
    
    try {
        const [results] = await connection.execute(sql, params);
        const duration = Date.now() - startTime;
        
        if (process.env.NODE_ENV === 'production' && duration > 1000) {
            console.warn(`[DB] Slow query detected: ${duration}ms - ${sql.substring(0, 100)}...`);
        }
        
        return results;
    } catch (error) {
        const duration = Date.now() - startTime;
        console.error(`[DB] Query failed after ${duration}ms:`, {
            sql: sql.substring(0, 200),
            params: params.length,
            error: error.message
        });
        throw new Error(`Database operation failed: ${error.message}`);
    }
}

/**
 * Execute a transaction
 * @param {Function} callback - Transaction callback function
 * @returns {Promise<any>} Transaction result
 */
async function executeTransaction(callback) {
    const connection = getPool();
    const conn = await connection.getConnection();
    
    try {
        await conn.beginTransaction();
        const result = await callback(conn);
        await conn.commit();
        return result;
    } catch (error) {
        await conn.rollback();
        throw error;
    } finally {
        conn.release();
    }
}

/**
 * Close database connection pool
 * @returns {Promise<void>}
 */
async function closePool() {
    if (pool) {
        await pool.end();
        pool = null;
        console.log('Database connection pool closed');
    }
}

module.exports = { 
    getPool, 
    executeQuery, 
    executeTransaction, 
    closePool 
}; 