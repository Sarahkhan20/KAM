import React, { useState, useEffect } from "react";
import axios from "axios";

const RestaurantForm = React.memo(
  ({ fetchRestaurants, restaurantToEdit, setRestaurantToEdit }) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
      if (restaurantToEdit) {
        setName(restaurantToEdit.name);
        setAddress(restaurantToEdit.address);
      }
    }, [restaurantToEdit]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Form submitted"); // Log submission

      const restaurantData = { name, address };

      if (isSubmitting) {
        console.log(
          "Submission already in progress, preventing duplicate submission."
        );
        return; // Prevent further submissions if already submitting
      }
      setIsSubmitting(true); // Set submitting state to true

      try {
        if (restaurantToEdit) {
          // Update restaurant
          // await axios.put(`http://localhost:5000/api/restaurants/${restaurantToEdit._id}`, restaurantData);
        } else {
          // Add new restaurant
          await axios.post(
            "http://localhost:5000/api/restaurants",
            restaurantData
          );
        }
        setName("");
        setAddress("");
        setRestaurantToEdit(null);
        fetchRestaurants(); // Refresh the list after adding/updating
      } catch (error) {
        console.error("Error adding/updating restaurant:", error);
      } finally {
        setIsSubmitting(false); // Reset submitting state
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Restaurant Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Restaurant Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {restaurantToEdit ? "Update" : "Add"} Restaurant
        </button>
      </form>
    );
  }
);

export default RestaurantForm;
