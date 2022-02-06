const Joi = require('joi');

module.exports.validate = (schema) => (req, res, next) => {
  const sources = Object.keys(schema);
  let errors = [];
  for (const source of sources) {
    const data = req[source] || {};
    const schemaObj = Joi.isSchema(schema[source])
      ? schema[source]
      : Joi.object(schema[source]);
    const result = schemaObj.validate(data, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (!result.error) {
      req[source] = result.value;
    } else {
      errors = errors.concat(result.error.details);
    }
  }

  if (errors.length > 0) {
    const message = errors.map((i) => i.message).join(' and ');

    res.status(422).json({ message });
  } else {
    next();
  }
};
