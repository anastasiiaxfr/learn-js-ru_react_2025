import { createSlice, createSelector } from '@reduxjs/toolkit';

import { normalizedDishes } from '../../../normalized-mock';

export const cartSlice = createSlice({
	name: 'cartSlice',
	initialState: {},
	reducers: {
		addToCart: (state, { payload }) => {
			const { id, restaurantId } = payload;
			if (!state[id]) {
				state[id] = { amount: 1, restaurantId: restaurantId };
			} else {
				state[id].amount += 1;
			}

		},
		removeFromCart: (state, {payload}) => {
			if (!state[payload]) {
				return state;
			}

			state[payload].amount -= 1;

			if (state[payload].amount <= 0) {
				delete state[payload];
			}
		}
	},
	selectors: {
		selectAmountByDishId: (state, { id }) => {
			return state[id] ? state[id].amount : 0; 
		  }
	}
});

export const { selectAmountByDishId } = cartSlice.selectors;

export const { addToCart, removeFromCart } = cartSlice.actions;

const selectCartSlice = (state) => state.cartSlice;

export const selectCartItems = selectCartSlice;

export const selectCartItemsIds = createSelector([selectCartSlice], (cart) =>
	Object.keys(cart)
);

export const selectTotalSum = createSelector([selectCartSlice], (cart) => {
	return Object.keys(cart).reduce((total, id) => {
	  const { amount } = cart[id]; 
	  const dish = normalizedDishes.find((dish) => dish.id === id);
  
	  if (dish) {
		total += dish.price * amount; 
	  }
  
	  return total;
	}, 0);
  });