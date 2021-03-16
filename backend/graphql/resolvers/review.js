const Review = require('../../models/review');
const User = require('../../models/user');
const Product = require('../../models/product');

module.exports = {
  Query: {
    getReviews: async () => await Review.find({}).exec(),
  },
  User: {
    createdBy: async (parent) => {
      console.log('Review - User - RELAATION');
      const response = await User.findOne({ _id: parent.createdBy }).exec();
      return response;
    },
  },
  Product: {
    product: async (parent) => {
      console.log('Product - User - RELAATION');
      const response = await Product.findOne({ _id: parent.product }).exec();
      return response;
    },
  },
};
