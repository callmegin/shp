const mongoose = require('mongoose');
const { Schema } = mongoose;

const productImageSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  },
  { strict: false }
);

module.exports = {
  ProductImage: mongoose.model('ProductImage', productImageSchema),
  productImageSchema: productImageSchema,
};
