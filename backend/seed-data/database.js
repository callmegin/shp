const mongoose = require('mongoose');
require('dotenv/config');
require('../dbconfig');
const models = require('../models');
const {
  Category,
  Type,
  Product,
  ProductImage,
  CategoryImage,
} = require('../models');

const resolvers = require('../graphql/resolvers');
const categoryImage = require('../models/categoryImage');
const types = require('../graphql/resolvers/types');

const promiseWait = (list, asyncFunc) => {
  const promises = [];

  return Promise.all(promises);
};

const clone = (items) =>
  items.map((item) => (Array.isArray(item) ? clone(item) : item));

module.exports = {
  getTypes: async () => {
    try {
      let types = [];
      const categories = await resolvers.Query.getCategories();

      await Promise.all(
        categories.map(async (item) => {
          await resolvers.Categories.types(item).then((result) => {
            let key = item.category;
            result.map((el) => {
              let value = el.type;
              types = {
                ...types,
                [key]: types[key] ? [value, ...types[key]] : [value],
              };
            });
          });
        })
      );
      return types;
    } catch (error) {
      console.log(error);
    }
  },
  terminate: () =>
    mongoose.connection.close(() => console.log('connection closed')),
};
