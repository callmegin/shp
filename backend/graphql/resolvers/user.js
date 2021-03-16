const User = require('../../models/user');
const Rating = require('../../models/rating');
const Product = require('../../models/product');

module.exports = {
  Query: {
    user: async (parent, { id }) => {
      return await User.findOne({ _id: id }).exec();
    },
    getUsers: async () => {
      try {
        let response = await User.find({}).exec();
        console.log(response);
        return response;
      } catch (e) {
        console.log(e);
        return e.message;
      }
    },
    // getUserRatings: async (_, args) => {
    //   try {
    //     let response =
    //   } catch (e) {

    //   }
    // }
  },
  Mutation: {
    login: async (_, { email, password }) => {
      //8:56
    },
    addUser: async (_, args) => {
      try {
        console.log('AAAAADDDDDUSEEERRRSSS');
        let response = await User.create(args);
        return response;
      } catch (e) {
        return e.message;
      }
    },
    addRating: async (_, args) => {
      try {
        const response = await Rating.create(args);
        const creator = await User.findOne({ _id: args.createdBy }).exec();
        creator.ratings.push(response);
        await creator.save();

        const product = await Product.findOne({ _id: args.product }).exec();
        console.log('--------------------------------------');
        console.log(args);
        console.log('-------------');
        console.log(product);
        console.log('-------------');
        console.log(response);
        console.log('--------------------------------------');
        product.ratings.push(response);
        await product.save();

        return response;
      } catch (e) {
        return e.message;
      }
    },
  },
  Ratings: {
    ratings: async (parent) => {
      console.log('User - Rating - RELAATION');
      try {
        const ratings = parent.ratings;
        const rating = await ratings.map((val) =>
          Rating.findOne({ _id: val }).exec()
        );
        return rating;
      } catch (e) {
        return e.message;
      }
      // const response = await Rating.find
    },
  },
};
