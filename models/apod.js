const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ApodSchema = new Schema({
  title: { type: String, required: true },
  urlImage: String,
  date: String,
  copyright: String,
  explanation: String,
});

const Apod = mongoose.model("Apod", ApodSchema);

module.exports = Apod;
