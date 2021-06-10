/**
 * By clavatar
 * @param {mongoose.Schema} Schema reference schema
 * @param {mongoose.Schema} definition new schema definition
 * @returns {mongoose.Schema} extended schema
 */
function extendSchema(Schema, definition) {
  // copy complex objects
  definition.obj = {
    ...definition.obj,
    ...Schema.obj,
  };
  // copy path
  definition.paths = {
    ...definition.paths,
    ...Schema.paths,
  };
  return definition;
}

// export
exports = extendSchema;
