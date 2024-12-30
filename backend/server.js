const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const restaurantRoutes = require("./routes/restaurantRoutes");
const cors = require("cors"); // Import cors

dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
  })
);
app.use(express.json());

app.use("/api/restaurants", restaurantRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
