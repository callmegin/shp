const mongoose = require('mongoose');
require('dotenv/config');
require('../dbconfig');
const fs = require('fs');
const {
  Category,
  Type,
  Product,
  ProductImage,
  CategoryImage,
} = require('../models');

const sampleData = './seed-data/sampleData.json';

//get data from json
const data = JSON.parse(fs.readFileSync(sampleData, 'utf8'));

const generateCategories = async () => {
  try {
    for (const product of data.sampleData) {
      console.log(product);
      let { category, type, image, category_id } = product;
      let dbCategory, dbType, dbProduct, dbImage;

      dbCategory = await Category.findOne({ category: category }).exec();
      if (!dbCategory)
        dbCategory = await Category.create({ category: category });

      if (product.original_image.includes('main')) {
        image = {
          ...image,
          category_name: category,
        };
        dbImage = await CategoryImage.create(image);

        await dbCategory.updateOne({ image: dbImage._id });
        await dbImage.updateOne({ category: dbCategory._id });

        continue;
      }

      dbType = await Type.findOne({ type: type }).exec();
      if (!dbType) dbType = await Type.create({ type: type });

      image = {
        ...image,
        category: category,
        type: type,
        thumb_url: image.eager[0].url,
        thumb_secure_url: image.eager[0].secure_url,
      };

      dbImage = await ProductImage.create(image);

      product = {
        ...product,
        image: dbImage._id,
      };

      dbProduct = await Product.create(product);

      if (!dbCategory.types.includes(dbType._id)) {
        dbCategory.types.push(dbType._id);
      }
      dbCategory.products.push(dbProduct._id);
      await dbCategory.save();

      if (!dbType.category) {
        await dbType.updateOne({ category: dbCategory._id });
      }
      dbType.products.push(dbProduct._id);
      await dbType.save();

      await dbImage.updateOne({ product: dbProduct._id });

      //output for some visual representation
    }

    mongoose.connection.close(() => console.log('connection closed'));
  } catch (error) {
    console.log(error);
    mongoose.connection.close(() => console.log('connection closed'));
  }
};
mongoose.connection.once('open', function () {
  console.log('🍻🍻🍻🍻🍻');
  generateCategories();
});
