import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from '../../../normalized-mock';

const initialState = {
  entities: normalizedRestaurants.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantsSlice = createSlice({
  name: "restaurantsSlice",
  initialState,
  selectors: {
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantByDishId: (state, dishId) => {
      const restaurant = normalizedRestaurants.find((restaurant) =>
        restaurant.menu.includes(dishId)
      );

      return restaurant ? restaurant.name : null;
    },
  },
});

export const { selectRestaurantById, selectRestaurantsIds, selectRestaurantByDishId } = restaurantsSlice.selectors;