import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import {getRestaurants} from './get-restaurants.js';
import {getRestaurant} from './get-restaurant.js';

export const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
	name: 'restaurantsSlice',
	initialState: entityAdapter.getInitialState(),
	selectors: {
		selectRequestStatus: state => state.requestStatus
	},
	extraReducers: builder => {
		builder.addCase(getRestaurants.fulfilled, (state, {payload}) => {
			entityAdapter.setAll(state, payload);
		});
		builder.addCase(getRestaurant.fulfilled, (state, {payload}) => {
			entityAdapter.setOne(state, payload);
		});
	}
});

export const {selectRequestStatus} = restaurantsSlice.selectors;

const selectRestaurantsSlice = state => state.restaurantsSlice;

export const {
	selectIds: selectRestaurantsIds,
	selectById: selectRestaurantById,
	selectTotal: selectRestaurantsTotal
} = entityAdapter.getSelectors(selectRestaurantsSlice);
