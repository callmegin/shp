const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv/config');

const h = require('./helpers');

if (!process.env.npm_config_fileName) {
  throw new Error(
    'Missing json File Name. Please run: npm --fileName=[desired name] run mksjon / readjson'
  );
}

const sampleData = `./seed-data/${process.env.npm_config_fileName}.json`;

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
let typesDataset = [];
let nameDataset = [];

const readTextFiles = (name, path) => {
  const category = name.substr(0, name.indexOf('.'));
  const data = fs.readFileSync(path, 'utf8').toString().split('\r\n');
  nameDataset = {
    ...nameDataset,
    [category]: data,
  };
};

const readJsonData = (path) => {
  typesDataset = JSON.parse(fs.readFileSync(path, 'utf8'));
};

const createDatasets = async () => {
  return Promise.all(
    fs.readdirSync(location).map((file) => {
      if (h.isRequiredFile(file)) {
        const fullpPath = path.join(location, file);
        switch (h.getFileType(file)) {
          case 'txt':
            readTextFiles(file, fullpPath);
            break;
          case 'json':
            readJsonData(fullpPath);
            break;
          default:
            throw 'Invalid file type';
        }
      }
    })
  );
};

const getFolders = () => {
  return Promise.all(fs.readdirSync(location).map(getFiles));
};

const getFiles = (folder) => {
  const inner = path.join(location, folder);
  if (!h.isRequiredFile(inner)) {
    const files = fs.readdirSync(inner);
    return Promise.all(
      files.map((file) => {
        return uploadData(folder, file);
      })
    );
  }
};

const uploadData = (folder, file) => {
  return new Promise((resolve, reject) => {
    const inner = path.join(location, folder);
    const fullPath = path.join(inner, file);

    const productName = h.getRandomValue(nameDataset[folder]);
    const productType = h.getRandomValue(typesDataset[folder]);

    let product = {
      name: productName,
      type: productType,
      description: h.generateDescription(productName, productType),
      price: h.generatePrice(50, 600),
      original_image: file,
      category: folder,
    };

    cloudinary.uploader.upload(
      fullPath,
      {
        folder: fullPath.slice(0, -4).endsWith('main')
          ? `shp/homepage`
          : `shp/${folder}/`,
        eager: [{ width: 200, height: 200 }],
      },
      (err, image) => {
        if (err) reject(err);
        else {
          product = {
            ...product,
            original_image: '',
            image: image,
          };
          jsonData.sampleData.push(product);
          console.log(`Resolved: ${productName} - ${folder}`);
          resolve(image);
        }
      }
    );
  });
};

// save response data to JSON
const init = async () => {
  await createDatasets();
  getFolders().then(() => {
    fs.writeFile(sampleData, JSON.stringify(jsonData, null, 1), (err) => {
      if (err) {
        throw err;
      } else {
        console.log('Completed');
      }
    });
  });
};
init();
