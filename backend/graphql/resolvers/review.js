const { Review, User, Product } = require('../../models');

module.exports = {
  Query: {
    getReviews: async () => {
      try {
        await Review.find({}).exec();
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
