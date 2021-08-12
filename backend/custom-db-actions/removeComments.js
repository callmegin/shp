const mongoose = require('mongoose');
require('dotenv/config');
require('../dbconfig');
const models = require('../models');
const {
  Category,
  Type,
  Product,
  ProductImage,
  CategoryImage,
  Review,
} = require('../models');

const removeAllComments = async (reviews) => {
  await Promise.all(
    reviews.map(
      async (item) =>
        await Review({
          _id: item._id,
          product: item.product,
        }).remove()
    )
  );
};

const getAllIds = async () => {
  const reviews = await Review.find({}).exec();
  await removeAllComments(reviews);
  mongoose.connection.close(() => console.log('Connection closed'));
};

mongoose.connection.once('open', function () {
  console.log('🍻🍻🍻🍻🍻');
  getAllIds();
});
