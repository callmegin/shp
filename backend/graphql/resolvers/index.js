const userResolver = require('./user');
const productResolver = require('./product');
const reviewResolver = require('./review');
const categoriesResolver = require('./categories.js');
const typesResolver = require('./types');
const type = require('../../models/type');
//TODO: reikia chekinti ar toks useris ar produktas yra pries kuriant reviewsa

const resolvers = {
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
