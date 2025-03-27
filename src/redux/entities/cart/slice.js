import {createSlice} from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../normalized-mock';

export const cartSlice = createSlice({
	name: 'cartSlice',
	initialState: {},
	reducers: {
		addToCart: (state, {payload}) => {
			state[payload] = (state[payload] || 0) + 1;
		},
		removeFromCart: (state, {payload}) => {
			if (!state[payload]) {
				return state;
			}

			state[payload] = state[payload] - 1;

			if (state[payload] <= 0) {
				delete state[payload];
			}
		}
	},
	selectors: {
		selectCartItems: state =>
			Object.keys(state).reduce((acc, id) => {
				acc.push({id, amount: state[id]});

				return acc;
			}, []),
		selectAmountByDishId: (state, id) => state[id],
		selectRestaurantByDishId: (state, dishId) => {
			const restaurant = normalizedRestaurants.find((restaurant) =>
			  restaurant.menu.includes(dishId)
			);
	  
			return restaurant ? restaurant.name : null;
		  },
	}
});

export const {selectCartItems, selectAmountByDishId, selectRestaurantByDishId} = cartSlice.selectors;

export const {addToCart, removeFromCart} = cartSlice.actions;
