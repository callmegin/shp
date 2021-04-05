const { User } = require('../../models/user');
const { Review } = require('../../models/review');
const { Product } = require('../../models/product');

module.exports = {
  Query: {
    user: async (parent, { id }) => {
      return await User.findOne({ _id: id }).exec();
    },
    getUsers: async () => {
      try {
        let response = await User.find({}).exec();
        return response;
      } catch (e) {
        console.log(e);
        return e.message;
      }
    },
    // getUserreviews: async (_, args) => {
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
        let response = await User.create(args);
        return response;
      } catch (e) {
        return e.message;
      }
    },
    addReview: async (_, args) => {
      try {
        const response = await Review.create(args);
        const creator = await User.findOne({ _id: args.createdBy }).exec();
        creator.reviews.push(response);
        await creator.save();

        const product = await Product.findOne({ _id: args.product }).exec();
        product.reviews.push(response);
        await product.save();

        return response;
      } catch (e) {
        return e.message;
      }
    },
  },
  Reviews: {
    reviews: async (parent) => {
      console.log('User - review - RELAATION');
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
