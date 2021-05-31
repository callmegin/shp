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
