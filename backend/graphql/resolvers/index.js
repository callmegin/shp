const userResolver = require('./user');
const productResolver = require('./product');
const reviewResolver = require('./review');
const categoriesResolver = require('./categories.js');
const typesResolver = require('./types');

const dateScalar = require('./scalars/dateScalar');

const resolvers = {
  Date: dateScalar,
  Query: {
    ...userResolver.Query,
    ...productResolver.Query,
    ...reviewResolver.Query,
    ...categoriesResolver.Query,
    ...typesResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
    ...productResolver.Mutation,
  },
  Review: {
    ...reviewResolver.Relationships,
  },
  User: {
    ...userResolver.Relationships,
  },
  Product: {
    ...productResolver.Relationships,
  },
  Categories: {
    ...categoriesResolver.Relationships,
  },
  Types: {
    ...typesResolver.Relationships,
  },
};

module.exports = resolvers;
