/**
 * By clavatar
 * @param {string} lowerCaseString
 * @returns {string} capitalized string
 */
function capitalizeFirstLetter(lowerCaseString) {
  return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
}

// export
exports = capitalizeFirstLetter;
