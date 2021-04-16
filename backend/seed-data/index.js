const mongoose = require('mongoose');
require('dotenv/config');
require('../dbconfig');
const fs = require('fs');
const { Category, Type, Product, ProductImage } = require('../models');

const sampleData = './seed-data/sampleData.json';

//get data from json
const data = JSON.parse(fs.readFileSync(sampleData, 'utf8'));

let categories = [];
let types = [];

const generateCategories = async () => {
  try {
    for (const product of data.sampleData) {
      let { category, type, image, category_id } = product;
      let dbCategory, dbType, dbProduct, dbImage;
      !categories.find((item) => item.category === category) &&
        categories.push({ category });
      !types.find((item) => item.type === type) && types.push({ type });

      dbCategory = await Category.findOne({ category: category }).exec();
      dbType = await Type.findOne({ type: type }).exec();

      if (!dbCategory)
        dbCategory = await Category.create({ category: category });
      if (!dbType) dbType = await Type.create({ type: type });

      dbImage = await ProductImage.create(product.image);

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
        await dbType.update({ category: dbCategory._id });
      }
      dbType.products.push(dbProduct._id);
      await dbType.save();

      //output for some visual representation
      console.log(dbType);
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
