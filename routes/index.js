const router = require("express").Router();
const restaurantRoutes = require("./restaurants");

// API routes
router.use("/api/restaurants", restaurantRoutes);

module.exports = router;