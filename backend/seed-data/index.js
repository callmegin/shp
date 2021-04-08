const mongoose = require('mongoose');
require('dotenv/config');
require('../dbconfig');
const fs = require('fs');
const {
  Category,
  Type,
  Product,
  ProductImage,
  Review,
  User,
} = require('../models');

const sampleData = './seed-data/sampleData.json';

//TODO: update database info with stored cloudinary response in sampleData.json
//TODO: from json: generate products, categories, productimages
//---------------------------------------------------------------
//get data from json
const data = JSON.parse(fs.readFileSync(sampleData, 'utf8'));

let categories = [];
let types = [];

//initial thought process to track categories and add them to db
const generateCategories = async () => {
  for (const product of data.sampleData) {
    let { category, type, image, category_id } = product;
    let dbCategory, dbType, dbProduct, dbImage;
    !categories.find((item) => item.category === category) &&
      categories.push({ category });
    !types.find((item) => item.type === type) && types.push({ type });
    //TODO: https://mongoosejs.com/docs/connections.html
    //TODO: reik turbut bisk perdaryt models failus man ir priedo permest kitur mongoose shit from here
    console.log('running');

    dbCategory = await Category.findOne({ category: category }).exec();
    dbType = await Type.findOne({ type: type }).exec();

    if (!dbCategory) dbCategory = await Category.create({ category: category });
    if (!dbType) dbType = await Type.create({ type: type });

    dbImage = await ProductImage.create(product.image);

    product = {
      ...product,
      image: dbImage._id,
    };
    console.log(product);
    dbProduct = await Product.create(product);

    if (!dbCategory.types.includes(dbType._id)) {
      dbCategory.types.push(dbType._id);
    }
    dbCategory.products.push(dbProduct._id);
    await dbCategory.save();

    if (!dbType.category.includes(dbCategory._id)) {
      dbType.category.push(dbCategory._id);
    }
    dbType.products.push(dbProduct._id);
    await dbType.save();
  }

  mongoose.connection.close(() => console.log('connection closed'));
};
mongoose.connection.once('open', function () {
  console.log('🍻🍻🍻🍻🍻');
  generateCategories();
});
