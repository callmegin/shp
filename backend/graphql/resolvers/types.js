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
          throw new e('Either ID or Type should be provided, not both');
        return await Type.findOne({ type: type }).exec();
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
        return await parent.categories.map((id) =>
          Category.findOne({ _id: id })
        );
      } catch (e) {
        return e.message;
      }
    },
  },
};
