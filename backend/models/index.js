const { categorySchema } = require('./category.js');
const { productSchema } = require('./product.js');
const { productImageSchema } = require('./productImage.js');
const { reviewSchema } = require('./review.js');
const { userSchema } = require('./user.js');

const modelSchemas = {
  categorySchema,
  productSchema,
  productImageSchema,
  reviewSchema,
  userSchema,
};

module.exports = modelSchemas;
