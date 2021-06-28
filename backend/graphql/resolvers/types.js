const { Category, Type } = require('../../models');
const parseFields = require('graphql-parse-fields');
const { addProductsCount } = require('./helpers');

module.exports = {
  Query: {
    getTypes: async (_, __, ___, info) => {
      try {
        const res = await Type.find({}).exec();
        return addProductsCount(res, info);
      } catch (e) {
        return e.message;
      }
    },
    getType: async (_, { id, type }, __, info) => {
      try {
        if ((id && type) || (!id && !type))
          throw new Error('Either ID or Type should be provided, not both');
        if (id) {
          const res = await Type.findOne({ _id: id }).exec();
          return addProductsCount(res, info);
        }
        if (type) {
          const res = await Type.findOne({ type: type }).exec();
          return addProductsCount(res, info);
        }
      } catch (e) {
        return e.message;
      }
    },
  },
  // Mutation: {
  //       addCategory: async (_, args) => {},
  // },
  Relationships: {
    category: async (parent) => {
      try {
        return await Category.findOne({ _id: parent.category }).exec();
      } catch (e) {
        return e.message;
      }
    },
  },
};
