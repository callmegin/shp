const Product = require('../../models/product');
const Review = require('../../models/review');

module.exports = {
  Query: {
    getProducts: async () => await Product.find({}).exec(),
    getProduct: async (_, { id }) => await Product.findOne({ _id: id }).exec(),
  },
  Mutation: {
    addProduct: async (_, args) => {
      try {
        let response = await Product.create(args);
        return response;
      } catch (e) {
        return e.message;
      }
    },
  },
  Reviews: {
    reviews: async (parent) => {
      try {
        const reviews = parent.reviews;
        const review = await reviews.map((val) =>
          Review.findOne({ _id: val }).exec()
        );
        return review;
      } catch (e) {
        return e.message;
      }
    },
  },
};
