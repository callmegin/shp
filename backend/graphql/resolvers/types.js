const { Category, Type } = require('../../models');

module.exports = {
  Query: {
    getTypes: async () => {
      try {
        return await Type.find({}).exec();
      } catch (e) {
        return e.message;
      }
    },
    getType: async (_, { id, type }) => {
      try {
        if (id && type)
          throw new Error('Either ID or Type should be provided, not both');
        if (id) return await Type.findOne({ _id: id }).exec();
        if (type) return await Type.findOne({ type: type }).exec();
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
