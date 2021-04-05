const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');
require('dotenv/config');
const modelSchemas = require('../models');

const dbURL = process.env.DATABASE_URL;

//TODO: update database info with stored cloudinary response in sampleData.json

//---------------------------------------------------------------
const getData = async () => {
  const conn = mongoose.createConnection(dbURL);
  const data = await conn
    .model('ProductImage', modelSchemas.productImageSchema)
    .find({})
    .exec();
  console.log(data);
  conn.close(() => {
    console.log('closing connection');
  });
};

const addToDb = async (data) => {
  const conn = mongoose.createConnection(dbURL);
  await conn
    .model('ProductImage', modelSchemas.productImageSchema)
    .create(data);

  conn.close(() => {
    console.log('closing connection');
  });
};

exports.uploadImage = uploadImage;
