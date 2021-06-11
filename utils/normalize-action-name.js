/**
 * By Clavatar
 * @param {string} actionName dash separated string to normalize
 * @returns {strinf} camelCase format of action querry param
 */
const capitalizeFirstLetter = require("./capitalize-firstletter");

module.exports = (actionName) => {
  let stringParts = actionName.split("-");
  let capitalised = stringParts.map((currentPart, index) =>
    index > 0 ? capitalizeFirstLetter(currentPart) : currentPart
  );

  return capitalised.join("");
};
