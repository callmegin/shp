const { Category, Type } = require('../../models');
const parseFields = require('graphql-parse-fields');

module.exports = {
  Query: {
    getTypes: async (_, args, context, info) => {
      try {
        const { productsCount } = parseFields(info);
        const types = await Type.find({}).exec();

        if (productsCount)
          return types.map(
            (type) =>
              (type = {
                ...type.toJSON(),
                productsCount: type.products.length,
              })
          );
        // types = {...types, productsCount: productsCount ? }

        return types;
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
