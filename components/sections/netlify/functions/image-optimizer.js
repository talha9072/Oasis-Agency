const fetch = require('node-fetch');
const { errorResponse } = require('./helpers');
const { validateQueryParams } = require('./validation');

exports.handler = async (event) => {
    const { url, w = 800, q = 75, fm = 'auto' } = event.queryStringParameters || {};

    // Validate query parameters
    const paramCheck = validateQueryParams({ url }, ['url']);
    if (!paramCheck.valid || !url.startsWith('http')) {
        return errorResponse(400, "Invalid or missing 'url' parameter.");
    }

    try {
        // Fetch the image from the external URL
        const response = await fetch(url);

        if (!response.ok) {
            return errorResponse(response.status, `Failed to fetch image: ${response.statusText}`);
        }

        const contentType = response.headers.get('Content-Type') || 'image/jpeg';

        // Return the image as a base64-encoded response
        return {
            statusCode: 200,
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=31536000', // Cache for 1 year
            },
            body: (await response.buffer()).toString('base64'),
            isBase64Encoded: true,
        };
    } catch (error) {
        console.error('image-optimizer error:', error);
        return errorResponse(500, 'Failed to optimize image', error.message);
    }
};
