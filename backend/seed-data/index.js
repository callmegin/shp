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

if (!process.env.npm_config_fileName) {
  throw new Error(
    'Missing json File Name. Please run: npm --fileName=[filename to read] run seed'
  );
}

const sampleData = `./seed-data/${process.env.npm_config_fileName}.json`;

//get data from json
const data = JSON.parse(fs.readFileSync(sampleData, 'utf8'));

// const generateCategories = async () => {
//   try {
//     return Promise.all(
//       data.sampleData.map(
//         async ({ name, type, description, price, category, image }) => {
//           console.log(name);
//         }
//       )
//     );
//   } catch (error) {
//     console.error(error);
//     mongoose.connection.close(() => console.error('Connection closed'));
//   }
// };

const generateCategories = async () => {
  try {
    for (const product of data.sampleData) {
      console.log(product);
      //destructuring product
      let { category, type, image, category_id } = product;
      //declaring variables
      let dbCategory, dbType, dbProduct, dbImage;
      //checking if category exists, if not - create one
      dbCategory = await Category.findOne({ category: category }).exec();
      if (!dbCategory)
        dbCategory = await Category.create({ category: category });
      //checking whether provided product contains MAIN image
      if (image.original_filename.includes('-main')) {
        image = {
          ...image,
          category_name: category,
        };
        //creating image in db
        dbImage = await CategoryImage.create(image);
        //updating image_id in category (category images used in homepage)
        await dbCategory.updateOne({ image: dbImage._id });
        //updating image with category id
        await dbImage.updateOne({ category: dbCategory._id });

        continue;
      }
      //checking wheter type is created or not, if not - create
      dbType = await Type.findOne({ type: type }).exec();
      if (!dbType) dbType = await Type.create({ type: type });

      image = {
        ...image,
        category: category,
        type: type,
        thumb_url: image.eager[0].url,
        thumb_secure_url: image.eager[0].secure_url,
      };
      //creating product image
      dbImage = await ProductImage.create(image);

      product = {
        ...product,
        image: dbImage._id,
      };
      //creating product
      dbProduct = await Product.create(product);
      //create type in category type array if it's not there
      if (!dbCategory.types.includes(dbType._id)) {
        dbCategory.types.push(dbType._id);
      }
      //creating product id in category product array
      dbCategory.products.push(dbProduct._id);
      await dbCategory.save();
      //create category od om type category array
      if (!dbType.category) {
        await dbType.updateOne({ category: dbCategory._id });
      }
      dbType.products.push(dbProduct._id);
      await dbType.save();
      //update image with prodcut id
      await dbImage.updateOne({ product: dbProduct._id });

      //output for some visual representation
    }

    console.log('Completed');
    mongoose.connection.close(() => console.log('Connection closed'));
  } catch (error) {
    console.log(error);
    mongoose.connection.close(() => console.log('connection closed'));
  }
};
mongoose.connection.once('open', function () {
  console.log('🍻🍻🍻🍻🍻');
  generateCategories();
});
