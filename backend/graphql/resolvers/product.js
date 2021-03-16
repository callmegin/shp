const Product = require('../../models/product');
const Rating = require('../../models/rating');

module.exports = {
  Query: {
    getProducts: async () => await Product.find({}).exec(),
    getProduct: async (_, { id }) => await Product.findOne({ _id: id }).exec(),
  },
  Mutation: {
    addProduct: async (_, args) => {
      try {
        console.log('AAAAAAAADDDDDDPPROOOOOOODUCT');
        console.log(args);
        let response = await Product.create(args);
        console.log(response);
        return response;
      } catch (e) {
        return e.message;
      }
    },
  },
  Ratings: {
    ratings: async (parent) => {
      console.log('Product - Rating - RELAATION');
      // const response = await Rating.find
      try {
        const ratings = parent.ratings;
        const rating = await ratings.map((val) =>
          Rating.findOne({ _id: val }).exec()
        );
        return rating;
      } catch (e) {
        return e.message;
      }
    },
  },
};
