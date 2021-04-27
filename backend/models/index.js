const Category = require('./category.js');
const Type = require('./type.js');
const Product = require('./product.js');
const ProductImage = require('./productImage.js');
const CategoryImage = require('./categoryImage.js');
const Review = require('./review.js');
const User = require('./user.js');

const models = {
  Category,
  Type,
  Product,
  ProductImage,
  CategoryImage,
  Review,
  User,
};

module.exports = models;
