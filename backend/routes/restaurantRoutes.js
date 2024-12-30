const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant"); // Ensure this path is correct

// GET all restaurants
router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new restaurant
// POST a new restaurant
router.post("/", async (req, res) => {
  const { name, address } = req.body;

  // Check if a restaurant with the same name and address already exists
  const existingRestaurant = await Restaurant.findOne({ name, address });
  if (existingRestaurant) {
    return res.status(400).json({ message: "Restaurant already exists" });
  }

  const restaurant = new Restaurant({
    name,
    address,
  });

  try {
    const newRestaurant = await restaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
