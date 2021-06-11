const ErrorResponse = require("../../zoro-errors-glossary/error-response.class");

/**
 * By Clavatar
 * @param {module} errorGlossary module that defines and export all possible zoro errors
 * @returns {ErrorResponse} zoro error class
 */
module.exports = (errorsGlossary, errorMessage) => {
  let found = null;
  Object.keys(errorsGlossary).forEach((key, index) => {
    if(errorsGlossary[key].message === errorMessage) {
      found = errorsGlossary[key];
      return;
    }
  });
  return found
};
