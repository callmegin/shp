const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  category: {
    type: String,
    required: true,
    unique: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  types: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Type',
    },
  ],
});

module.exports = mongoose.model('Category', categorySchema);
