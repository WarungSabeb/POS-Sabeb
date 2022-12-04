const mongoose = require('mongoose');

const item = mongoose.Schema({
  item_name: String,
  item_image: String,
  item_price: Number,
  item_stock: Number,
});

module.exports = mongoose.model('Items', item);
