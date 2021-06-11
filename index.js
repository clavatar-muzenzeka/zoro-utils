/**
 * By clavatar
 */
const capitalizeFirstLetter = require("./utils/capitalize-firstletter");
const extendSchema = require("./utils/extend-schema");
const getEnumValue = require("./utils/get-enum-values");
const normalizeActionName = require('./utils/normalize-action-name');
const findErrorClassByMessage = require('./utils/find-error-class-by-message')

/**
 * exports
 */

// capitalize first letter of given lowercase string
exports.capitalizeFirstLetter = capitalizeFirstLetter;

// extends mongoose base schema
exports.extendSchema = extendSchema;

// get given enum values as array
exports.getEnumValue = getEnumValue;

// normalise action querry param from dash separated form to camel case
exports.normalizeActionName = normalizeActionName;

// find zoro error class by error message
exports.findErrorClassByMessage = findErrorClassByMessage;
