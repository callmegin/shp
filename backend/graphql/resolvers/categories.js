const { Category, Type } = require('../../models');

module.exports = {
  Query: {
    getCategories: async () => {
      try {
        return await Category.find({}).exec();
      } catch (e) {
        return e.message;
      }
    },
    getCategory: async (_, { id, category }) => {
      try {
        if (id && category)
          throw new e('Either ID or Category should be provided, not both');
        if (!id) return await Category.findOne({ _id: id }).exec();
        if (!type) return await Category.findOne({ category: category }).exec();
      } catch (e) {
        return e.message;
      }
    },
  },
  // Mutation: {
  //       addCategory: async (_, args) => {},
  // },
  Relationships: {
    types: async (parent) => {
      try {
        return await parent.types.map((id) => Type.findOne({ _id: id }));
      } catch (e) {
        return e.message;
      }
    },
  },
};
