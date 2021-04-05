const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');
require('dotenv/config');
const fs = require('fs');
const modelSchemas = require('../models');

const sampleData = './seed-data/sampleData.json';
const dbURL = process.env.DATABASE_URL;

//TODO: update database info with stored cloudinary response in sampleData.json
//TODO: from json: generate products, categories, productimages
//---------------------------------------------------------------
//get data from json
const data = JSON.parse(fs.readFileSync(sampleData, 'utf8'));

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

const addToDb = async () => {
  const conn = mongoose.createConnection(dbURL);
  await conn
    .model('ProductImage', modelSchemas.productImageSchema)
    .create(data.sampleData);

  conn.close(() => {
    console.log('closing connection');
  });
};
