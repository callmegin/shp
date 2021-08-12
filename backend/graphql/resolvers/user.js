const { User, Review, Product } = require('../../models');

const overallRating = (reviews) => {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  const calculatedRating = Math.round((total / reviews.length) * 2) / 2;
  if (calculatedRating === 0) calculatedRating = 0.5;
  return calculatedRating;
};

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
        if (args.rating === 0)
          throw new Error('Rating can be between 1 and 5 only.');
        const review = await Review.create(args);
        const creator = await User.findOne({ _id: args.createdBy }).exec();
        creator.reviews.push(review._id);
        await creator.save();

        const product = await Product.findOne({ _id: args.product }).exec();
        product.reviews.push(review._id);

        const reviews = await Review.find({}).exec();
        product.averageRating = overallRating(reviews);
        product.reviewsCount = reviews.length;

        console.log('---end---');
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
        return await Promise.all(
          reviews.map(async (val) => await Review.findOne({ _id: val }).exec())
        );
      } catch (e) {
        return e.message;
      }
    },
  },
};
