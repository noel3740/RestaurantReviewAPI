const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");
var http = require("http").Server(app);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/restaurantreview"
);

http.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
