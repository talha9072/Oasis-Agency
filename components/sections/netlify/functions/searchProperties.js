const { getCorsHeaders, errorResponse } = require('./helpers');
const { parseSearchParams } = require('./utils/searchUtils');
const PropertySearchService = require('./services/propertySearchService');

/**
 * Netlify function handler for property search.
 * All data is served from the local database for reliability.
 */
exports.handler = async (event) => {
    const startTime = Date.now();
    const requestId = Math.random().toString(36).substr(2, 9);
    
    try {
        const origin = event.headers.origin || event.headers.Origin;
        const corsHeaders = getCorsHeaders(origin);
        
        // Handle preflight requests
        if (event.httpMethod === 'OPTIONS') {
            return { 
                statusCode: 200, 
                headers: corsHeaders, 
                body: '' 
            };
        }
        
        // Validate HTTP method
        if (event.httpMethod !== 'GET') {
            return errorResponse(405, corsHeaders, 'Method not allowed', 'Only GET requests are supported');
        }
        
        if (process.env.NODE_ENV !== 'production') {
            console.log(`[${requestId}] Search request started`);
        }
        
        // Parse and validate parameters
        const params = parseSearchParams(event.queryStringParameters);
        const service = new PropertySearchService();
        
        // Execute search
        const { metadata, results } = await service.search(params);
        
        const duration = Date.now() - startTime;
        if (process.env.NODE_ENV !== 'production') {
            console.log(`[${requestId}] Search completed in ${duration}ms - ${results.length} results`);
        }
        
        return {
            statusCode: 200,
            headers: {
                ...corsHeaders,
                'Content-Type': 'application/json',
                'X-Request-ID': requestId,
                'X-Response-Time': `${duration}ms`
            },
            body: JSON.stringify({ 
                metadata: {
                    ...metadata,
                    requestId,
                    responseTime: duration
                }, 
                results 
            })
        };
        
    } catch (error) {
        const duration = Date.now() - startTime;
        console.error(`[${requestId}] Search failed after ${duration}ms:`, {
            error: error.message,
            stack: error.stack
        });
        
        return errorResponse(
            error.statusCode || 500, 
            getCorsHeaders(event.headers.origin || event.headers.Origin), 
            'Failed to fetch properties', 
            error.message
        );
    }
};