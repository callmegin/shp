const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratingSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
});

module.exports = mongoose.model('Rating', ratingSchema);
