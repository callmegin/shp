const { Review, User, Product } = require('../../models');

module.exports = {
  Query: {
    getReviews: async (_, { product }) => {
      try {
        return await Review.find({ product: product }).exec();
        return tst;
      } catch (e) {
        return e.message;
      }
    },
  },
  Relationships: {
    createdBy: async (parent) => {
      try {
        return await User.findOne({ _id: parent.createdBy }).exec();
      } catch (e) {
        return e.message;
      }
    },
    product: async (parent) => {
      try {
        return await Product.findOne({ _id: parent.product }).exec();
      } catch (e) {
        return e.message;
      }
    },
  },
};
