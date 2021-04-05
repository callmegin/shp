const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv/config');

const { uploadImage } = require('./index');

const sampleData = './seed-data/sampleData.json';

if (process.argv.includes('--read')) {
  try {
    const data = fs.readFileSync(sampleData, 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  return;
}

let jsonData = {
  sampleData: [],
};
let product = {
  name: '',
  description: '',
  status: '',
  category: '',
  price: '',
  type: '',
  original_image: '',
  image: {},
};
const location = process.env.SEED_DATA_LOCATION;

const getFolders = () => {
  return Promise.all(fs.readdirSync(location).map(getFiles));
};
const getFiles = (folder) => {
  const inner = path.join(location, folder);
  const files = fs.readdirSync(inner);
  return Promise.all(
    files.map((file) => {
      return uploadData(folder, file);
    })
  );
};

const uploadData = (folder, file) => {
  return new Promise((resolve, reject) => {
    const inner = path.join(location, folder);
    const fullPath = path.join(inner, file);
    cloudinary.uploader.upload(
      fullPath,
      {
        folder: `shp/${folder}/`,
      },
      (err, image) => {
        if (err) reject(err);
        //DO SOMETHING
        else {
          product = {
            ...product,
            original_image: file,
            category: folder,
            image: image,
          };
          jsonData.sampleData.push(product);
          console.log(product);
          resolve(image);
        }
      }
    );
  });
};

getFolders().then((result) => {
  console.log(
    '***************** >>>>>>>>>>>>>>>>>>>>>>>>>>>>>  RRRRRRESSUULLT <<<<<<<<<<<<<<<<<<<<< ************************************'
  );
  console.log(jsonData);
  console.log(result);
  fs.writeFile(sampleData, JSON.stringify(jsonData, null, 1), (err) => {
    if (err) {
      throw err;
    }
  });
});
