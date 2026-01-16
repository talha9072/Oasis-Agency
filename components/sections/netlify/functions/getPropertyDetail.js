const { getCorsHeaders, errorResponse } = require('./helpers');
const PropertyDetailService = require('./services/propertyDetailService');

exports.handler = async (event) => {
    const startTime = Date.now();
    const requestId = Math.random().toString(36).substr(2, 9);
    
    try {
        const origin = event.headers.origin || event.headers.Origin;
        const corsHeaders = getCorsHeaders(origin);
        
        // Handle preflight requests
        if (event.httpMethod === 'OPTIONS') {
            return { 
                statusCode: 204, 
                headers: corsHeaders, 
                body: '' 
            };
        }
        
        // Validate HTTP method
        if (event.httpMethod !== 'GET') {
            return errorResponse(405, corsHeaders, 'Method not allowed', 'Only GET requests are supported');
        }
        
        // Parse and validate parameters
        const { project_id, source } = event.queryStringParameters || {};
        
        if (!project_id) {
            return errorResponse(400, corsHeaders, 'Bad Request', 'Project ID is required');
        }
        
        // Sanitize project_id
        const sanitizedProjectId = project_id.trim();
        if (sanitizedProjectId.length === 0) {
            return errorResponse(400, corsHeaders, 'Bad Request', 'Project ID cannot be empty');
        }
        
        if (process.env.NODE_ENV !== 'production') {
            console.log(`[${requestId}] Property detail request for: ${sanitizedProjectId} (source: ${source || 'auto'})`);
        }
        
        // Execute detail fetch
        const service = new PropertyDetailService();
        const detail = await service.getDetail(sanitizedProjectId, source);
        
        if (!detail) {
            return errorResponse(404, corsHeaders, 'Not Found', 'Property not found');
        }
        
        const duration = Date.now() - startTime;
        console.log(`[${requestId}] Property detail completed in ${duration}ms`);
        
        return {
            statusCode: 200,
            headers: {
                ...corsHeaders,
                'Content-Type': 'application/json',
                'X-Request-ID': requestId,
                'X-Response-Time': `${duration}ms`
            },
            body: JSON.stringify({
                ...detail,
                _metadata: {
                    requestId,
                    responseTime: duration,
                    projectId: sanitizedProjectId,
                    source: source || 'auto'
                }
            })
        };
        
    } catch (error) {
        const duration = Date.now() - startTime;
        console.error(`[${requestId}] Property detail failed after ${duration}ms:`, {
            error: error.message,
            stack: error.stack
        });
        
        // Handle specific error types
        const errorCorsHeaders = getCorsHeaders(event.headers.origin || event.headers.Origin);
        
        if (error.message.includes('not found') || error.message.includes('missing seo_url')) {
            return errorResponse(404, errorCorsHeaders, 'Not Found', error.message);
        }
        
        if (error.message.includes('timeout') || error.message.includes('API')) {
            return errorResponse(503, errorCorsHeaders, 'Service Unavailable', 'External API temporarily unavailable');
        }
        
        return errorResponse(
            error.statusCode || 500, 
            errorCorsHeaders, 
            'Internal Server Error', 
            'Failed to fetch property detail'
        );
    }
};
