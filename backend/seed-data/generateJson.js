const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv/config');

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

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const location = process.env.SEED_DATA_LOCATION;

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
        folder: fullPath.slice(0, -4).endsWith('main')
          ? `shp/homepage`
          : `shp/${folder}/`,
      },
      (err, image) => {
        if (err) reject(err);
        else {
          product = {
            ...product,
            original_image: file,
            category: folder,
            image: image,
          };
          jsonData.sampleData.push(product);
          resolve(image);
        }
      }
    );
  });
};

//save response data to JSON
getFolders().then((result) => {
  fs.writeFile(sampleData, JSON.stringify(jsonData, null, 1), (err) => {
    if (err) {
      throw err;
    }
  });
});
