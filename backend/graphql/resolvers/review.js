const { Review, User, Product } = require('../../models');

module.exports = {
  Query: {
    getReviews: async () => await Review.find({}).exec(),
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
