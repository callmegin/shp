const userResolver = require('./user');
const productResolver = require('./product');
const reviewResolver = require('./review');

//TODO: reikia chekinti ar toks useris ar produktas yra pries kuriant reviewsa

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
    ...productResolver.ProductImage,
  },
};

module.exports = resolvers;
