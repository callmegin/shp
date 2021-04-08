const { Review, User, Product } = require('../../models');

module.exports = {
  Query: {
    getReviews: async () => await Review.find({}).exec(),
  },
  Relationships: {
    createdBy: async (parent) => {
      console.log('Review - User - RELAATION');
      const response = await User.findOne({ _id: parent.createdBy }).exec();
      return response;
    },
    product: async (parent) => {
      console.log('Product - User - RELAATION');
      const response = await Product.findOne({ _id: parent.product }).exec();
      return response;
    },
  },
};
