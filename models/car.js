const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const carSchema = new Schema({
  car_name: String,
  car_make: String,
  km: String,
  car_year:String,
  price: Number,
  ext_color: String,
  status: String,  
  image_url: String,
  contributed_by: String
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;