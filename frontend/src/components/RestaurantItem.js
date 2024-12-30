import React from "react";
import axios from "axios";

const RestaurantItem = ({
  restaurant,
  fetchRestaurants,
  setRestaurantToEdit,
}) => {
  const handleDelete = async () => {
    await axios.delete(`/api/restaurants/${restaurant._id}`);
    fetchRestaurants();
  };

  return (
    <div>
      <h3>{restaurant.name}</h3>
      <p>{restaurant.address}</p>
      <button onClick={() => setRestaurantToEdit(restaurant)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default RestaurantItem;
