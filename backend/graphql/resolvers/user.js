const { User, Review, Product } = require('../../models');

module.exports = {
  Query: {
    user: async (parent, { id }) => {
      try {
        return await User.findOne({ _id: id }).exec();
      } catch (e) {
        return e.message;
      }
    },
    getUsers: async () => {
      try {
        let response = await User.find({}).exec();
        return response;
      } catch (e) {
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
        const review = await Review.create(args);
        const creator = await User.findOne({ _id: args.createdBy }).exec();
        creator.reviews.push(review._id);
        await creator.save();

        const product = await Product.findOne({ _id: args.product }).exec();
        product.reviews.push(review._id);
        await product.save();

        return review;
      } catch (e) {
        return e.message;
      }
    },
  },
  Relationships: {
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
