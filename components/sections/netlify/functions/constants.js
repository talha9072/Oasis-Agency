/**
 * Application constants
 * @module constants
 */

const DB_CONFIG = {
    CONNECTION_LIMIT: 10,
    QUEUE_LIMIT: 0,
    WAIT_FOR_CONNECTIONS: true
};


const SEARCH_CONSTANTS = {
    SOURCES: {
        OFFPLAN: 'offplan',
        SECONDARY: 'secondary',
        BOTH: 'both'
    },
    SORT_ORDERS: {
        ASC: 'asc',
        DESC: 'desc'
    },
    ALLOWED_OFFPLAN_SORT_FIELDS: [
        'price_min', 'price_max', 'area_min', 'area_max',
        'bed_min', 'bed_max', 'bath_min', 'bath_max',
        'name', 'location'
    ],
    ALLOWED_SECONDARY_SORT_FIELDS: [
        'price', 'size', 'bedrooms', 'bathrooms',
        'property_name', 'community', 'listing_title', 'listing_id',
        'unit_no', 'owner', 'developers', 'permit_number', 'listing_status',
        'property_type', 'offering_type', 'last_update', 'Listing_Last_Modified_Date'
    ]
};

const JSON_FIELDS = {
    OFFPLAN_PROPERTIES: [
        'images', 'features', 'finishing', 'folder',
        'organisation', 'building', 'payment_method'
    ],
    OFFPLAN_LAYOUTS: [
        'scheme', 'images', 'floor_plan',
        'payment_plan', 'payment_type'
    ],
    SECONDARY_PROPERTIES: [
        'images', 'agent', 'floor_plan', 'privateamenities', 
        'commercialamenities', 'notes', 'privateAmenitiestest', 'commercialAmenitiestest'
    ]
};


module.exports = {
    DB_CONFIG,
    SEARCH_CONSTANTS,
    JSON_FIELDS
}; 