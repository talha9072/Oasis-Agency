const { getCorsHeaders, errorResponse } = require('./helpers');
const { executeQuery } = require('./db');

exports.handler = async function(event, context) {
    const origin = event.headers.origin || event.headers.Origin;
    const corsHeaders = getCorsHeaders(origin);
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers: corsHeaders, body: '' };
    }
    try {
        const source = event.queryStringParameters?.source || 'offplan';
        if (source === 'offplan') {
            // Fetch all districts from DB
            const rows = await executeQuery('SELECT name FROM districts');
            const districts = rows.map(r => r.name);
            return {
                statusCode: 200,
                headers: corsHeaders,
                body: JSON.stringify({ suggestions: districts })
            };
        } else if (source === 'secondary') {
            // Fetch all communities from DB
            const rows = await executeQuery('SELECT name FROM communities');
            const communities = rows.map(r => r.name);
            return {
                statusCode: 200,
                headers: corsHeaders,
                body: JSON.stringify({ suggestions: communities })
            };
        } else {
            return errorResponse(400, corsHeaders, 'Invalid source parameter');
        }
    } catch (error) {
        if (process.env.DEBUG === 'true') console.error('locationSuggestions error:', error);
        return errorResponse(500, corsHeaders, 'Failed to fetch location suggestions', error.message);
    }
}; 