const { Product } = require('../../models/product');
const { Review } = require('../../models/review');
const { Category } = require('../../models/category');

module.exports = {
  Query: {
    getProducts: async (_, { category, type }) => {
      try {
        if (type) {
          return await Product.find({ category: category, type: type }).exec();
        }
        if (category) {
          return await Product.find({ category: category }).exec();
        }
        return await Product.find({}).exec();
      } catch (e) {
        return e.message;
      }
    },
    getProduct: async (_, { id }) => await Product.findOne({ _id: id }).exec(),
  },
  Mutation: {
    addProduct: async (_, args) => {
      try {
        const response = await Product.create(args);
        if (!(await Category.findOne({ category: args.category }).exec())) {
          await Category.create({ category: args.category });
        }
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
