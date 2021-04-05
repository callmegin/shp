const mongoose = require('mongoose');

const dbURL = process.env.DATABASE_URL;

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
console.log('INIT MONGOOSE');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!

  console.log('Connected?');
});
