const userResolver = require('./user');
const productResolver = require('./product');
const ratingsResolver = require('./rating');
const relations = require('./relationships');

const resolvers = {
  Query: {
    ...userResolver.Query,
    ...productResolver.Query,
    ...ratingsResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
    ...productResolver.Mutation,
  },
  Rating: {
    ...ratingsResolver.User,
    ...ratingsResolver.Product,
  },
  User: {
    ...userResolver.Ratings,
  },
  Product: {
    ...productResolver.Ratings,
  },
};

module.exports = resolvers;
