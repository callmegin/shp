const mongoose = require('mongoose');
const { Schema } = mongoose;

const typeSchema = new Schema({
  type: {
    type: String,
    required: true,
    unique: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
});

module.exports = mongoose.model('Type', typeSchema);
