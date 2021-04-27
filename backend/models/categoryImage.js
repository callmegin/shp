const mongoose = require('mongoose');
const { Schema } = mongoose;

const categoryImageSchema = new Schema({
  category_name: {
    type: String,
    require: true,
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
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
});

module.exports = mongoose.model('CategoryImage', categoryImageSchema);
