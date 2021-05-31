const { Category, Type } = require('../../models');
const categoryImage = require('../../models/categoryImage');

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
          throw new Error('Either ID or Category should be provided, not both');
        if (id) return await Category.findOne({ _id: id }).exec();
        if (category)
          return await Category.findOne({ category: category }).exec();
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
        return await Promise.all(
          parent.types.map(async (id) => await Type.findOne({ _id: id }))
        );
      } catch (e) {
        return e.message;
      }
    },
    image: async (parent) => {
      try {
        return await categoryImage.findOne({ _id: parent.image });
      } catch (e) {
        return e.message;
      }
    },
  },
};
