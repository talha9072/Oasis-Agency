
const allowedOrigins = [
    'http://localhost:63342',
    'http://localhost:3000',
    'http://127.0.0.1:5500',
    'http://127.0.0.1:5501',
    'http://localhost:8888',
    'https://aghalirealestate.netlify.app',
    'https://api.aghalirealestate.com'
];

function getCorsHeaders(origin) {
    return {
        'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : 'https://aghalirealestate.netlify.app',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json'
    };
}

function errorResponse(statusCode, headers, message, details = null) {
    const errorBody = {
        error: message,
        statusCode,
        timestamp: new Date().toISOString()
    };
    
    if (details) {
        errorBody.details = details;
    }
    
    return {
        statusCode,
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(errorBody)
    };
}

module.exports = {
    getCorsHeaders,
    errorResponse,
    allowedOrigins
}; 