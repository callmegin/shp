const parseFields = require('graphql-parse-fields');
const type = require('../../models/type');

const addProductsCount = (response, info) => {
  const { productsCount } = parseFields(info);
  if (productsCount) {
    if (Object.prototype.toString.call(response) === '[object Array]') {
      const res = response.map((type) => {
        type = {
          ...type.toObject({ virtuals: true }),
          productsCount: type.products.length,
        };
        return type;
      });
      return res;
    }
    response = {
      ...response.toObject({ virtuals: true }),
      productsCount: response.products.length,
    };
    return response;
  }
  return response;
};

exports.addProductsCount = addProductsCount;
