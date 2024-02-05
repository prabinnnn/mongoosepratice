const Joi = require("joi");

const schema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string(),
  content: Joi.string(),
});

const validate = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  } else {
    next();
  }
};

module.exports = { validate };
