const Joi = require("joi");
const Schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 1, tlds: { allow: ["com"] } }),
  birth_year: Joi.number().integer().min(1900).max(2023),
  phoneno: Joi.string().required(),
});
const validate = (req, res, next) => {
  const { error } = Schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  } else {
    next();
  }
};
module.exports = { validate };
