/**
 * By clavatar
 */
const capitalizeFirstLetter = require("./utils/capitalize-firstletter");
const extendSchema = require("./utils/extend-schema");
const getEnumValue = require("./utils/get-enum-values");

/**
 * exports
 */

// capitalize first letter of given lowercase string
exports.capitalizeFirstLetter = capitalizeFirstLetter;

// extends mongoose base schema
exports.extendSchema = extendSchema;

// get given enum values as array
exports.getEnumValue = getEnumValue;
