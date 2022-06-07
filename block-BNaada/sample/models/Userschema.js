let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let user = new Schema(
  {
    name: { type: String, required: true },
    email: String,
    age: Number,
    mobile: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', user);
