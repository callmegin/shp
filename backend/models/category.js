const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  category: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: Schema.Types.ObjectId,
    ref: 'CategoryImage',
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
