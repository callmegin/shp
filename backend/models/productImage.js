const mongoose = require('mongoose');
const { Schema } = mongoose;

const productImageSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  url: {
    type: String,
    required: true,
  },
  asset_id: {
    type: String,
    required: true,
  },
  public_id: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  },
  secure_url: {
    type: String,
    required: true,
  },
  original_filename: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  thumb_secure_url: {
    type: String,
    required: true,
  },
  thumb_url: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ProductImage', productImageSchema);
