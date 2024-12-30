import React, { useState, useEffect } from "react";
import axios from "axios";
import RestaurantForm from "./components/RestaurantForm";
import RestaurantList from "./components/RestaurantList";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantToEdit, setRestaurantToEdit] = useState(null);

  const fetchRestaurants = async () => {
    const response = await axios.get("http://localhost:5000/api/restaurants");
    setRestaurants(response.data);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div>
      <h1>Restaurant List</h1>
      <RestaurantForm
        fetchRestaurants={fetchRestaurants}
        restaurantToEdit={restaurantToEdit}
        setRestaurantToEdit={setRestaurantToEdit}
      />
      <RestaurantList
        restaurants={restaurants}
        fetchRestaurants={fetchRestaurants}
        setRestaurantToEdit={setRestaurantToEdit}
      />
    </div>
  );
};

export default App;
