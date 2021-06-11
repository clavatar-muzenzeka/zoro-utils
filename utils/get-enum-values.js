/**
 * By clavatar
 * @param {Object} complexEnum
 * @returns {string[]} array of enum values
 */
function getEnumValue(complexEnum) {
  return Object.getOwnPropertyNames(complexEnum).map(
    (currEnumKey) => complexEnum[currEnumKey]
  );
}

// export
module.exports = getEnumValue;
