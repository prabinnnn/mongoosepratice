const Joi = require("joi");
const Schema = Joi.object({
  title: Joi.string().required(),
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
