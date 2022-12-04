const joi = require('joi');

module.exports = {
  register: {
    body: {
      full_name: joi.string().min(3).max(100).required(),
      email: joi.string().email().required(),
      phone: joi.number().required(),
      password: joi.string().min(6).max(32).required(),
    },
  },

  login: {
    body: {
      email: joi.string().email().required(),
      password: joi.string().required(),
    },
  },

  item: {
    body: {
      item_name: joi.string().required(),
      item_image: joi.string().required(),
      item_price: joi.number().required(),
      item_stock: joi.number().required(),
    },
  },
};
