const mongoose = require('mongoose');
const { Schema } = mongoose;
const Product = require('../models');

const reviewSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
});

reviewSchema.pre('remove', function () {
  //doesn't remove review ids in product reviews array
  try {
    return new Promise((resolve, reject) =>
      this.model('Product')
        .findOne({ _id: this.product })
        .exec((err, res) => {
          res.reviews.pull(this._id);
          if (res.averageRating > 0) res.averageRating = 0;
          if (res.reviewsCount > 0) res.reviewsCount = 0;
          console.log(`${this._id} pulled`);
          resolve(res.save());
        })
    );
  } catch (e) {
    console.error(e);
    reject(new Error(e));
  }
});

module.exports = mongoose.model('Review', reviewSchema);
