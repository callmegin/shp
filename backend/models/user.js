const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  ratings: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Rating',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
