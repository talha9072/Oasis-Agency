/**
 * @fileoverview Utility functions for property search (pagination, sorting, grouping, param parsing)
 */

/**
 * @typedef {Object} SearchParams
 * @property {string} [propertyType]
 * @property {string} [beds]
 * @property {string} [baths]
 * @property {string} [priceMin]
 * @property {string} [priceMax]
 * @property {string} [location]
 * @property {number} [page]
 * @property {number} [limit]
 * @property {string} [source]
 * @property {string} [areaMin]
 * @property {string} [areaMax]
 * @property {string} [sortField]
 * @property {string} [sortOrder]
 * @property {string} [groupBy]
 * @property {string} [unit_no]
 * @property {string} [owner]
 * @property {string} [developers]
 * @property {string} [sub_community]
 * @property {string} [building]
 * @property {string} [listing_title]
 * @property {string} [listing_id]
 * @property {string} [permit_number]
 * @property {string} [category]
 * @property {string} [purpose]
 */

/**
 * Parse and sanitize search query parameters.
 * @param {Object} query
 * @returns {SearchParams}
 */
function parseSearchParams(query = {}) {
    return {
        propertyType: query.propertyType,
        beds: query.beds,
        baths: query.baths,
        priceMin: query.priceMin,
        priceMax: query.priceMax,
        location: query.location,
        page: parseInt(query.page) || 1,
        limit: parseInt(query.limit) || 20,
        source: query.source,
        areaMin: query.areaMin,
        areaMax: query.areaMax,
        sortField: query.sortField,
        sortOrder: query.sortOrder || 'asc',
        groupBy: query.groupBy,
        unit_no: query.unit_no,
        owner: query.owner,
        developers: query.developers,
        sub_community: query.sub_community,
        building: query.building,
        listing_title: query.listing_title,
        listing_id: query.listing_id,
        permit_number: query.permit_number,
        category: query.category,
        purpose: query.purpose
    };
}


module.exports = {
    parseSearchParams
}; 