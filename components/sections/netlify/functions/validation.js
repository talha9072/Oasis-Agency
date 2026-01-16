function validateQueryParams(params, required = []) {
    for (const key of required) {
        if (!params[key]) {
            return { valid: false, missing: key };
        }
    }
    return { valid: true };
}


module.exports = {
    validateQueryParams
}; 