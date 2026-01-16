/**
 * Shared utilities for Netlify functions
 * @module utils/shared
 */


/**
 * Parse JSON fields in a database row
 * @param {Object} row - Database row object
 * @param {string[]} fields - Array of field names to parse as JSON
 * @returns {Object} Row with parsed JSON fields
 */
function parseJSONFields(row, fields) {
    const result = { ...row };
    for (const field of fields) {
        if (result[field] && typeof result[field] === 'string') {
            try {
                result[field] = JSON.parse(result[field]);
            } catch (e) {
                // If parsing fails, leave as string
                console.warn(`Failed to parse JSON field ${field}:`, e.message);
            }
        }
    }
    return result;
}



/**
 * Build SQL ORDER BY clause
 * @param {string} sortField - Field to sort by
 * @param {string} sortOrder - Sort order (asc/desc)
 * @param {string[]} allowedFields - Array of allowed sort fields
 * @param {string} tablePrefix - Table prefix for field names
 * @returns {string} SQL ORDER BY clause
 */
function buildOrderByClause(sortField, sortOrder, allowedFields, tablePrefix = '') {
    if (!sortField || !allowedFields.includes(sortField)) {
        return '';
    }
    const prefix = tablePrefix ? `${tablePrefix}.` : '';
    const order = sortOrder === 'desc' ? 'DESC' : 'ASC';
    return `ORDER BY ${prefix}${sortField} ${order}`;
}


function extractIframeSrc(iframeHtml) {
    if (!iframeHtml) return null;
    const match = iframeHtml.match(/src=["']([^"']+)["']/);
    return match ? match[1] : null;
}

module.exports = {
    parseJSONFields,
    buildOrderByClause,
    extractIframeSrc
}; 