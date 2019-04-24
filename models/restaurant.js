const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: String,
  address: String,
  date: { type: Date, default: Date.now }
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;