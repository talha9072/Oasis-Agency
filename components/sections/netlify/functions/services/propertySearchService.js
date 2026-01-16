/**
 * @fileoverview Service for property search orchestration.
 */
const { executeQuery } = require('../db');
const { JSON_FIELDS, SEARCH_CONSTANTS } = require('../constants');
const { parseJSONFields, buildOrderByClause } = require('../utils/shared');


/**
 * @typedef {import('../utils/searchUtils').SearchParams} SearchParams
 */

/**
 * PropertySearchService: All search operations use only the local database.
 * Data ingestion from external APIs is handled by scripts/syncProperties.js.
 * No runtime API calls are allowed in this service for reliability.
 */
class PropertySearchService {
    constructor() {}

    /**
     * Main search method.
     * @param {Object} params
     * @returns {Promise<{metadata: Object, results: Object|Array}>}
     */
    async search(params) {
        const startTime = Date.now();
        
        try {
               const {
                   propertyType, beds, baths, priceMin, priceMax, location,
                   page = 1, limit = 20, source, areaMin, areaMax,
                   sortField, sortOrder = 'asc', groupBy, unit_no, owner,
                   developers, sub_community, building, listing_title,
                   listing_id, permit_number, category, purpose
               } = params;
            
            // Validate and sanitize parameters
            const validatedParams = this.validateSearchParams({
                propertyType, beds, baths, priceMin, priceMax, location,
                page, limit, source, areaMin, areaMax, sortField, sortOrder, groupBy,
                unit_no, owner, developers, sub_community, building, listing_title,
                listing_id, permit_number, category, purpose
            });
            
            const selectedSource = validatedParams.source || 'offplan';
            if (selectedSource === 'both') {
                throw new Error('You must specify either source=offplan or source=secondary for results.');
            }
            
            let results = [], metadata = {};
            let totalResults = 0;
            
            // --- Offplan Search ---
            if (selectedSource === 'offplan') {
                const filters = [];
                const values = [];
                if (validatedParams.propertyType) { filters.push('property_type = ?'); values.push(validatedParams.propertyType); }
                if (validatedParams.beds) { filters.push('bed_min >= ?'); values.push(validatedParams.beds); }
                if (validatedParams.baths) { filters.push('bath_min >= ?'); values.push(validatedParams.baths); }
                if (validatedParams.priceMin) { filters.push('price_min >= ?'); values.push(validatedParams.priceMin); }
                if (validatedParams.priceMax) { filters.push('price_max <= ?'); values.push(validatedParams.priceMax); }
                if (validatedParams.areaMin) { filters.push('area_min >= ?'); values.push(validatedParams.areaMin); }
                if (validatedParams.areaMax) { filters.push('area_max <= ?'); values.push(validatedParams.areaMax); }
                if (validatedParams.location) { filters.push('(location LIKE ? OR district LIKE ?)'); values.push(`%${validatedParams.location}%`, `%${validatedParams.location}%`); }
                const where = filters.length ? 'WHERE ' + filters.join(' AND ') : '';
                const orderBy = buildOrderByClause(validatedParams.sortField, validatedParams.sortOrder, SEARCH_CONSTANTS.ALLOWED_OFFPLAN_SORT_FIELDS);
                
                // Count total
                const countSql = `SELECT COUNT(*) as count FROM properties ${where}`;
                try {
                    const countRows = await executeQuery(countSql, values);
                    totalResults = countRows[0]?.count || 0;
                } catch (err) {
                    console.error('DB error (offplan count):', err);
                    throw new Error('Database operation failed (offplan count)');
                }
                
                // Query paginated
                const sql = `SELECT 
                    project_id, name, location, avatar, 
                    price_min, price_max, area_min, area_max,
                    bed_min, bed_max, bath_min, bath_max,
                    property_type, launch_type, launch_type2
                FROM properties ${where} ${orderBy} LIMIT ? OFFSET ?`;
                try {
                    const pagedValues = [...values, validatedParams.limit, (validatedParams.page - 1) * validatedParams.limit];
                    const rows = await executeQuery(sql, pagedValues);
                    results = rows.map(row => ({
                        project_id: row.project_id,
                        name: row.name,
                        location: row.location,
                        avatar: row.avatar,
                        priceMin: row.price_min,
                        priceMax: row.price_max,
                        areaMin: row.area_min,
                        areaMax: row.area_max,
                        bedMin: row.bed_min,
                        bedMax: row.bed_max,
                        bathMin: row.bath_min,
                        bathMax: row.bath_max,
                        propertyType: row.property_type,
                        LaunchType: row.launch_type2 || row.launch_type,
                        sourceType: 'offplan'
                    }));
                } catch (err) {
                    console.error('DB error (offplan search):', err);
                    throw new Error('Database operation failed (offplan search)');
                }
                
                metadata = {
                    totalResults,
                    page: validatedParams.page,
                    limit: validatedParams.limit,
                    source: selectedSource,
                    maxPages: Math.ceil(totalResults / validatedParams.limit) || 1
                };
            }
            
            // --- Secondary Search ---
            else if (selectedSource === 'secondary') {
                const filters = [];
                const values = [];
                if (validatedParams.propertyType) { filters.push('property_type = ?'); values.push(validatedParams.propertyType); }
        if (validatedParams.beds) { filters.push('bedrooms >= ?'); values.push(validatedParams.beds); }
        if (validatedParams.baths) { filters.push('bathrooms >= ?'); values.push(validatedParams.baths); }
                if (validatedParams.priceMin) { filters.push('price >= ?'); values.push(validatedParams.priceMin); }
                if (validatedParams.priceMax) { filters.push('price <= ?'); values.push(validatedParams.priceMax); }
                if (validatedParams.areaMin) { filters.push('size >= ?'); values.push(validatedParams.areaMin); }
                if (validatedParams.areaMax) { filters.push('size <= ?'); values.push(validatedParams.areaMax); }
                if (validatedParams.location) { filters.push('(community LIKE ? OR sub_community LIKE ? OR city LIKE ?)'); values.push(`%${validatedParams.location}%`, `%${validatedParams.location}%`, `%${validatedParams.location}%`); }
                if (validatedParams.unit_no) { filters.push('unit_no = ?'); values.push(validatedParams.unit_no); }
                if (validatedParams.owner) { filters.push('owner LIKE ?'); values.push(`%${validatedParams.owner}%`); }
                if (validatedParams.developers) { filters.push('developers LIKE ?'); values.push(`%${validatedParams.developers}%`); }
                if (validatedParams.sub_community) { filters.push('sub_community LIKE ?'); values.push(`%${validatedParams.sub_community}%`); }
                if (validatedParams.building) { filters.push('building LIKE ?'); values.push(`%${validatedParams.building}%`); }
                if (validatedParams.listing_title) { filters.push('listing_title LIKE ?'); values.push(`%${validatedParams.listing_title}%`); }
                if (validatedParams.listing_id) { filters.push('listing_id = ?'); values.push(validatedParams.listing_id); }
                if (validatedParams.permit_number) { filters.push('permit_number = ?'); values.push(validatedParams.permit_number); }
                if (validatedParams.category) { filters.push('category = ?'); values.push(validatedParams.category); }
                if (validatedParams.purpose) { filters.push('offering_type = ?'); values.push(validatedParams.purpose); }
                const where = filters.length ? 'WHERE ' + filters.join(' AND ') : '';
                const orderBy = buildOrderByClause(validatedParams.sortField, validatedParams.sortOrder, SEARCH_CONSTANTS.ALLOWED_SECONDARY_SORT_FIELDS);
                
                // Count total
                const countSql = `SELECT COUNT(*) as count FROM secondary_properties ${where}`;
                try {
                    const countRows = await executeQuery(countSql, values);
                    totalResults = countRows[0]?.count || 0;
                } catch (err) {
                    console.error('DB error (secondary count):', err);
                    throw new Error('Database operation failed (secondary count)');
                }
                
                // Query paginated - return all database fields
       const sql = `SELECT 
           reference_number, unit_id, permit_number, offering_type, property_type,
           price_on_application, price, service_charge, cheques, city, community,
           sub_community, property_name, title_en, description_en, plot_size,
           size, bedrooms, bathrooms, agent, build_year, parking, images,
           floor_plan, geopoints, availability_date, last_update, seo_url, building,
           unit_no, owner, developers, listing_title, listing_id, community_id,
           sub_community_id, building_id, listing_status, property_status, address,
           category, commercial_amenities, furnished, latitude, longitude, lot_size,
           property_purpose, rental_period, number_of_cheques, private_amenities,
           built_up_area, is_exclusive, is_featured, completion_status, financial_status,
           fireplace, freehold, listing_agent_id, listing_agent_name, listing_agent_email,
           listing_agent_phone, parking_spaces, project_name, project_status,
           available_from, ready_by, RERA_Permit_Number, RERA_Permit_Issue_Date,
           RERA_Permit_Expiration_Date, dtcm_permit, pool, Listing_Created_By,
           Listing_Created_Date, Listing_Last_Modified_By, Listing_Last_Modified_Date,
           owner_contact, owner_email, region, bayut, pfinder, houza, trb, simsari,
           properstar, genericwebsite, sudonum, propmatch, property_booster, website,
           video_link, youtube_link, user_id, prop_id, layout_type, plan, price_year,
           price_month, price_week, price_day, bayut_price, bayut_plan, bayut_price_year,
           bayut_price_month, bayut_price_week, bayut_price_day, is_different_pricing,
           title_deed, listing_title_ar, description_ar, hide_price, pf_account,
           bayut_account, payment_method, down_payment_price, price_gbp, bayut_portals,
           rightmove_property_type, landlord_id, landlord, landlord_contact, landlord_email,
           listing_source, qrcodeimage, bayut_region, bayut_community, bayut_sub_community,
           bayut_buildings, bayut_city, privateamenities, commercialamenities, notes,
           privateAmenitiestest, commercialAmenitiestest
       FROM secondary_properties ${where} ${orderBy} LIMIT ? OFFSET ?`;
                try {
                    const pagedValues = [...values, validatedParams.limit, (validatedParams.page - 1) * validatedParams.limit];
                    const rows = await executeQuery(sql, pagedValues);
                    results = rows.map(row => {
                        const parsed = parseJSONFields(row, JSON_FIELDS.SECONDARY_PROPERTIES);
                        return {
                        // All database fields
                        reference_number: row.reference_number,
                        unit_id: row.unit_id,
                        permit_number: row.permit_number,
                        offering_type: row.offering_type,
                        property_type: row.property_type,
                        price_on_application: row.price_on_application,
                        price: row.price,
                        service_charge: row.service_charge,
                        cheques: row.cheques,
                        city: row.city,
                        community: row.community,
                        sub_community: row.sub_community,
                        property_name: row.property_name,
                        title_en: row.title_en,
                        description_en: row.description_en,
                        plot_size: row.plot_size,
                        size: row.size,
                        bedrooms: row.bedrooms,
                        bathrooms: row.bathrooms,
                        agent: parsed.agent,
                        build_year: row.build_year,
                        parking: row.parking,
                        images: parsed.images,
                        floor_plan: parsed.floor_plan,
                        geopoints: row.geopoints,
                        availability_date: row.availability_date,
                        last_update: row.last_update,
                        seo_url: row.seo_url,
                        building: row.building,
                        unit_no: row.unit_no,
                        owner: row.owner,
                        developers: row.developers,
                        listing_title: row.listing_title,
                        listing_id: row.listing_id,
                        community_id: row.community_id,
                        sub_community_id: row.sub_community_id,
                        building_id: row.building_id,
                        listing_status: row.listing_status,
                        property_status: row.property_status,
                        address: row.address,
                        category: row.category,
                        commercial_amenities: row.commercial_amenities,
                        furnished: row.furnished,
                        latitude: row.latitude,
                        longitude: row.longitude,
                        lot_size: row.lot_size,
                        property_purpose: row.property_purpose,
                        rental_period: row.rental_period,
                        number_of_cheques: row.number_of_cheques,
                        private_amenities: row.private_amenities,
                        built_up_area: row.built_up_area,
                        is_exclusive: row.is_exclusive,
                        is_featured: row.is_featured,
                        completion_status: row.completion_status,
                        financial_status: row.financial_status,
                        fireplace: row.fireplace,
                        freehold: row.freehold,
                        listing_agent_id: row.listing_agent_id,
                        listing_agent_name: row.listing_agent_name,
                        listing_agent_email: row.listing_agent_email,
                        listing_agent_phone: row.listing_agent_phone,
                        parking_spaces: row.parking_spaces,
                        project_name: row.project_name,
                        project_status: row.project_status,
                        available_from: row.available_from,
                        ready_by: row.ready_by,
                        RERA_Permit_Number: row.RERA_Permit_Number,
                        RERA_Permit_Issue_Date: row.RERA_Permit_Issue_Date,
                        RERA_Permit_Expiration_Date: row.RERA_Permit_Expiration_Date,
                        dtcm_permit: row.dtcm_permit,
                        pool: row.pool,
                        Listing_Created_By: row.Listing_Created_By,
                        Listing_Created_Date: row.Listing_Created_Date,
                        Listing_Last_Modified_By: row.Listing_Last_Modified_By,
                        Listing_Last_Modified_Date: row.Listing_Last_Modified_Date,
                        owner_contact: row.owner_contact,
                        owner_email: row.owner_email,
                        region: row.region,
                        bayut: row.bayut,
                        pfinder: row.pfinder,
                        houza: row.houza,
                        trb: row.trb,
                        simsari: row.simsari,
                        properstar: row.properstar,
                        genericwebsite: row.genericwebsite,
                        sudonum: row.sudonum,
                        propmatch: row.propmatch,
                        property_booster: row.property_booster,
                        website: row.website,
                        video_link: row.video_link,
                        youtube_link: row.youtube_link,
                        user_id: row.user_id,
                        prop_id: row.prop_id,
                        layout_type: row.layout_type,
                        plan: row.plan,
                        price_year: row.price_year,
                        price_month: row.price_month,
                        price_week: row.price_week,
                        price_day: row.price_day,
                        bayut_price: row.bayut_price,
                        bayut_plan: row.bayut_plan,
                        bayut_price_year: row.bayut_price_year,
                        bayut_price_month: row.bayut_price_month,
                        bayut_price_week: row.bayut_price_week,
                        bayut_price_day: row.bayut_price_day,
                        is_different_pricing: row.is_different_pricing,
                        title_deed: row.title_deed,
                        listing_title_ar: row.listing_title_ar,
                        description_ar: row.description_ar,
                        hide_price: row.hide_price,
                        pf_account: row.pf_account,
                        bayut_account: row.bayut_account,
                        payment_method: row.payment_method,
                        down_payment_price: row.down_payment_price,
                        price_gbp: row.price_gbp,
                        bayut_portals: row.bayut_portals,
                        rightmove_property_type: row.rightmove_property_type,
                        landlord_id: row.landlord_id,
                        landlord: row.landlord,
                        landlord_contact: row.landlord_contact,
                        landlord_email: row.landlord_email,
                        listing_source: row.listing_source,
                        qrcodeimage: row.qrcodeimage,
                        bayut_region: row.bayut_region,
                        bayut_community: row.bayut_community,
                        bayut_sub_community: row.bayut_sub_community,
                        bayut_buildings: row.bayut_buildings,
                        bayut_city: row.bayut_city,
                        privateamenities: parsed.privateamenities,
                        commercialamenities: parsed.commercialamenities,
                        notes: parsed.notes,
                        privateAmenitiestest: parsed.privateAmenitiestest,
                        commercialAmenitiestest: parsed.commercialAmenitiestest,
                        
                        // Additional fields for compatibility
                        project_id: row.reference_number,
                        name: row.property_name,
                        location: row.community,
                        avatar: (parsed.images && Array.isArray(parsed.images) && parsed.images.length > 0) ? parsed.images[0] : undefined,
                        priceMin: row.price,
                        priceMax: row.price,
                        areaMin: row.size,
                        areaMax: row.size,
                        bedMin: row.bedrooms,
                        bedMax: row.bedrooms,
                        bathMin: row.bathrooms,
                        bathMax: row.bathrooms,
                        propertyType: row.property_type,
                        LaunchType: row.offering_type,
                        sourceType: 'secondary'
                        };
                    });
                } catch (err) {
                    console.error('DB error (secondary search):', err);
                    throw new Error('Database operation failed (secondary search)');
                }
                
                metadata = {
                    totalResults,
                    page: validatedParams.page,
                    limit: validatedParams.limit,
                    source: selectedSource,
                    maxPages: Math.ceil(totalResults / validatedParams.limit) || 1
                };
            }
            
            const duration = Date.now() - startTime;
            if (process.env.NODE_ENV !== 'production') {
                console.log(`[SEARCH] ${selectedSource} search completed in ${duration}ms - ${results.length} results`);
            }
            
            return { metadata, results };
            
        } catch (error) {
            const duration = Date.now() - startTime;
            console.error(`[SEARCH] Failed after ${duration}ms:`, error.message);
            throw error;
        }
    }

    /**
     * Validate and sanitize search parameters
     * @param {Object} params - Raw search parameters
     * @returns {Object} Validated parameters
     */
    validateSearchParams(params) {
        const validated = { ...params };
        
        // Validate page and limit
        validated.page = Math.max(1, parseInt(validated.page) || 1);
        validated.limit = Math.min(100, Math.max(1, parseInt(validated.limit) || 20));
        
        // Validate numeric parameters
        if (validated.beds) validated.beds = Math.max(0, parseInt(validated.beds) || 0);
        if (validated.baths) validated.baths = Math.max(0, parseInt(validated.baths) || 0);
        if (validated.priceMin) validated.priceMin = Math.max(0, parseFloat(validated.priceMin) || 0);
        if (validated.priceMax) validated.priceMax = Math.max(0, parseFloat(validated.priceMax) || 0);
        if (validated.areaMin) validated.areaMin = Math.max(0, parseFloat(validated.areaMin) || 0);
        if (validated.areaMax) validated.areaMax = Math.max(0, parseFloat(validated.areaMax) || 0);
        
        // Sanitize string parameters
        if (validated.propertyType) validated.propertyType = validated.propertyType.trim();
        if (validated.location) validated.location = validated.location.trim();
        if (validated.sortField) validated.sortField = validated.sortField.trim();
        if (validated.sortOrder) validated.sortOrder = ['asc', 'desc'].includes(validated.sortOrder.toLowerCase()) ? validated.sortOrder.toLowerCase() : 'asc';
        if (validated.unit_no) validated.unit_no = validated.unit_no.trim();
        if (validated.owner) validated.owner = validated.owner.trim();
        if (validated.developers) validated.developers = validated.developers.trim();
        if (validated.sub_community) validated.sub_community = validated.sub_community.trim();
        if (validated.building) validated.building = validated.building.trim();
        if (validated.listing_title) validated.listing_title = validated.listing_title.trim();
        if (validated.listing_id) validated.listing_id = validated.listing_id.trim();
        if (validated.permit_number) validated.permit_number = validated.permit_number.trim();
        if (validated.category) validated.category = validated.category.trim();
        if (validated.purpose) validated.purpose = validated.purpose.trim();
        
        return validated;
    }
}

module.exports = PropertySearchService; 