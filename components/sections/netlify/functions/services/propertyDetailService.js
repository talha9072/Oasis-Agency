/**
 * @fileoverview Service for fetching and mapping detailed project info.
 */
const { executeQuery } = require('../db');
const { JSON_FIELDS } = require('../constants');
const { parseJSONFields, extractIframeSrc } = require('../utils/shared');
const axios = require('axios');

class PropertyDetailService {
    constructor() {}

    /**
     * Fetch and map detailed project info by project_id.
     * @param {string} projectId
     * @param {string} [source] - 'offplan' or 'secondary'. If not provided, try both.
     * @returns {Promise<Object|null>} Detailed project object or null if not found
     */
    async getDetail(projectId, source) {
        // Try Offplan DB first
        if (!source || source === 'offplan') {
            const rows = await executeQuery('SELECT * FROM properties WHERE project_id = ?', [projectId]);
            if (rows && rows.length) {
                let property = parseJSONFields(rows[0], JSON_FIELDS.OFFPLAN_PROPERTIES);
                // Fetch layouts for this project
                const layouts = await executeQuery('SELECT * FROM layouts WHERE project_id = ?', [projectId]);
                property.layouts = layouts.map(l => {
                    const parsed = parseJSONFields(l, JSON_FIELDS.OFFPLAN_LAYOUTS);
                    return {
                        ...parsed,
                        link3D: extractIframeSrc(l.link_3d)
                    };
                });
                return property;
            }
        }
        // Try Secondary - fetch directly from Youtupia API
        if (!source || source === 'secondary') {
            // First get the seo_url from database
            const rows = await executeQuery('SELECT seo_url FROM secondary_properties WHERE reference_number = ?', [projectId]);
            if (rows && rows.length && rows[0].seo_url) {
                try {
                    // Fetch detailed data directly from Youtupia API
                    const detailedData = await this.fetchSecondaryDetail(rows[0].seo_url);
                    return detailedData;
                } catch (error) {
                    console.error('Failed to fetch detailed secondary data:', error.message);
                    throw new Error('Property not found or API unavailable');
                }
            } else {
                throw new Error('Property not found or missing seo_url');
            }
        }
        // Optionally, fallback to API (legacy)
        return null;
    }

    /**
     * Fetch detailed secondary property data from Youtupia API
     * @param {string} seoUrl - SEO URL for the property
     * @returns {Promise<Object>} Detailed property data
     */
    async fetchSecondaryDetail(seoUrl) {
        const startTime = Date.now();
        
        try {
            const apiKey = process.env.SECONDARY_API_KEY;
            if (!apiKey) {
                throw new Error('SECONDARY_API_KEY environment variable is not set');
            }

            const url = `https://youtupia.net/aghali/api/property-detail/${seoUrl}?key=${apiKey}`;
            console.log(`[API] Fetching secondary detail for: ${seoUrl}`);
            
            const response = await axios.get(url, {
                timeout: 15000, // 15 second timeout for production
                headers: {
                    'User-Agent': 'AG-Real-Estate/1.0',
                    'Accept': 'application/json',
                    'Cache-Control': 'no-cache'
                },
                validateStatus: (status) => status < 500 // Don't throw on 4xx errors
            });

            const duration = Date.now() - startTime;

            if (response.status === 404) {
                console.warn(`[API] Property not found: ${seoUrl} (${duration}ms)`);
                throw new Error('Property not found');
            }

            if (response.status !== 200) {
                console.error(`[API] HTTP ${response.status} for ${seoUrl} (${duration}ms)`);
                throw new Error(`API returned status ${response.status}`);
            }

            if (!response.data || !response.data.property) {
                console.error(`[API] Invalid response structure for ${seoUrl} (${duration}ms)`);
                throw new Error('Invalid API response structure');
            }

            console.log(`[API] Successfully fetched data for ${seoUrl} (${duration}ms)`);
            return response.data;

        } catch (error) {
            const duration = Date.now() - startTime;
            
            if (error.code === 'ECONNABORTED') {
                console.error(`[API] Timeout fetching ${seoUrl} after ${duration}ms`);
                throw new Error('API request timeout');
            }
            
            if (error.response) {
                console.error(`[API] HTTP ${error.response.status} for ${seoUrl} (${duration}ms):`, error.response.data);
                throw new Error(`API error: ${error.response.status}`);
            }
            
            console.error(`[API] Failed to fetch ${seoUrl} after ${duration}ms:`, error.message);
            throw error;
        }
    }
}

module.exports = PropertyDetailService;