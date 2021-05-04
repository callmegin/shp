const { Product, Review, Category, ProductImage } = require('../../models');

module.exports = {
  Query: {
    getProducts: async (_, { category, type }) => {
      try {
        if (type) {
          return await Product.find({ category: category, type: type }).exec();
        }
        if (category) {
          return await Product.find({ category: category }).exec();
        }
        return await Product.find({}).exec();
      } catch (e) {
        return e.message;
      }
    },
    getProductsCursor: async (_, { limit, cursor }) => {
      console.log('GET PRODUCTS CURSOR');
      try {
        let requiredProducts;

        !cursor
          ? (requiredProducts = await Product.find()
              .skip(0)
              .limit(limit + 1)
              .exec())
          : (requiredProducts = await Product.find({ _id: { $gt: cursor } })
              .sort({ _id: 1 })
              .limit(limit + 1)
              .exec());

        if (!requiredProducts)
          throw new Error(
            "Either there's no data, or hasNextPage was not taken into account previously."
          );
        // const documentsCount = await Product.estimatedDocumentCount();
        // console.log(documentsCount);
        const hasNextPage = requiredProducts.length > limit;

        const edges = [];

        if (hasNextPage) {
          requiredProducts = requiredProducts.slice(0, -1);
          requiredProducts.map((product) => {
            edges.push({
              cursor: product.id,
              node: product,
            });
          });
        } else {
          requiredProducts.map((product) => {
            edges.push({
              cursor: product.id,
              node: product,
            });
          });
        }

        const endCursor = requiredProducts[requiredProducts.length - 1]._id;

        return {
          edges,
          pageInfo: {
            endCursor,
            hasNextPage,
          },
        };
      } catch (e) {
        console.log(e);
        return e.message;
      }
    },
    getProduct: async (_, { id }) => {
      try {
        return await Product.findOne({ _id: id }).exec();
      } catch (e) {
        return e.message;
      }
    },
    getImagesByName: async (_, { fileName }) => {
      try {
        return await ProductImage.find({
          original_filename: { $regex: fileName },
        }).exec();
      } catch (e) {
        return e.message;
      }
    },
  },
  Mutation: {
    addProduct: async (_, args) => {
      try {
        const response = await Product.create(args);
        //check if category exists and add it if not found
        if (!(await Category.findOne({ category: args.category }).exec())) {
          await Category.create({ category: args.category });
        }
        return response;
      } catch (e) {
        return e.message;
      }
    },
  },
  Relationships: {
    reviews: async (parent) => {
      try {
        const review = await parent.reviews.map((id) =>
          Review.findOne({ _id: id }).exec()
        );
        return review;
      } catch (e) {
        return e.message;
      }
    },
    image: async (parent) => {
      try {
        const image = await ProductImage.findOne({ _id: parent.image }).exec();
        return image;
      } catch (e) {
        return e.message;
      }
    },
  },
};
