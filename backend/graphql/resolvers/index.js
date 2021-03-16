const userResolver = require('./user');
const productResolver = require('./product');
const reviewResolver = require('./review');

const resolvers = {
  Query: {
    ...userResolver.Query,
    ...productResolver.Query,
    ...reviewResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
    ...productResolver.Mutation,
  },
  Review: {
    ...reviewResolver.User,
    ...reviewResolver.Product,
  },
  User: {
    ...userResolver.Reviews,
  },
  Product: {
    ...productResolver.Reviews,
  },
};

module.exports = resolvers;
