import React from "react";
import RestaurantItem from "./RestaurantItem";

const RestaurantList = ({
  restaurants,
  fetchRestaurants,
  setRestaurantToEdit,
}) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantItem
          key={restaurant._id}
          restaurant={restaurant}
          fetchRestaurants={fetchRestaurants}
          setRestaurantToEdit={setRestaurantToEdit}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
