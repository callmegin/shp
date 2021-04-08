const { Category, Product, Type } = require('../../models');

module.exports = {
  Query: {
    getCategories: async () => {
      try {
        return await Category.find({}).exec();
      } catch (error) {
        return error.message;
      }
    },
    getCategory: async (_, { id, name }) => {
      try {
        if (id && name)
          throw new Error('Either ID or Name should be provided, not both');
        return await Category.findOne({ category: name }).exec();
      } catch (error) {
        return error.message;
      }
    },
  },
  Mutation: {
    addCategory: async (_, args) => {},
  },
  Relationships: {
    types: async (parent) => {
      try {
        return await parent.types.map((id) => Type.findOne({ _id: id }));
      } catch (error) {
        return error.message;
      }
    },
  },
};
