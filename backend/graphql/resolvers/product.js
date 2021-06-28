const { isObjectType } = require('graphql');
const { Product, Review, Category, ProductImage } = require('../../models');

const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const order = (sortBy) => {
  switch (sortBy.order) {
    case 'asc':
      return 'asc';
    case 'desc':
      return 'desc';
  }
};
const comparisonQuery = (value, order) => {
  switch (order) {
    case 'asc':
      return { $gt: value };
    case 'desc':
      return { $lt: value };
    default:
      return { $gt: value };
  }
};
const getSortedProducts = async (category, limit, cursor, sortBy) => {
  try {
    let expressionArray = [];
    let filterObject = {};
    let sortObj = {};
    category && (filterObject = { category: category });
    if (!isObjEmpty(sortBy)) {
      const order = sortBy.order === 'asc' ? 1 : -1;
      sortObj = { [sortBy.field]: order };
    } else {
      sortObj = { _id: 1 };
    }

    if (cursor) {
      const nextProduct = await Product.findOne({ _id: cursor }).exec();

      !isObjEmpty(sortBy)
        ? expressionArray.push({
            [sortBy.field]: comparisonQuery(
              nextProduct[sortBy.field],
              sortBy.order
            ),
          })
        : expressionArray.push({
            _id: { $gt: cursor },
          });
      filterObject = { ...filterObject, $or: expressionArray };
    }

    return await Product.find(filterObject)
      .sort(sortObj)
      .limit(limit + 1)
      .exec();
  } catch (error) {
    console.error(error);
  }
};

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
    getProductsCursor: async (_, { limit, cursor, category, sortBy }) => {
      try {
        console.log(`Incoming cursor: ${cursor}`);
        console.log(`Limit: ${limit}`);

        let requiredProducts = await getSortedProducts(
          category,
          limit,
          cursor,
          sortBy
        );

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
        }
        requiredProducts.map((product) => {
          edges.push({
            cursor: product.id,
            node: product,
          });
        });
        const endProduct = requiredProducts[requiredProducts.length - 1];

        const endCursor = `${endProduct._id}`;
        console.log(`Returning endCursor: ${endCursor}`);
        // console.log(edges);
        console.log('---------------------------------------------------');
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
        return await Promise.all(
          parent.reviews.map(
            async (id) => await Review.findOne({ _id: id }).exec()
          )
        );
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
