const mongoose = require("mongoose");

const devcoopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  discription: { type: String, required: true },
  code: { type: String, required: false },
  links: { type: Array, required: false },
  img: { type: String, required: false },
});

const DevCoop = mongoose.model("Devcoop", devcoopSchema);
module.exports = DevCoop;
