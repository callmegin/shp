const mongoose = require('mongoose');
const { Schema } = mongoose;

const productImageSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
    url: {
      type: String,
    },
  },
  { strict: false }
);

module.exports = mongoose.model('ProductImage', productImageSchema);
