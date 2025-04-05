import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import {getMenu} from './get-menu.js';
import {getDish} from './get-dish.js';

export const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
	name: 'dishesSlice',
	initialState: entityAdapter.getInitialState(),
	selectors: {
		selectRequestStatus: state => state.requestStatus
	},
	extraReducers: builder => {
		builder.addCase(getMenu.fulfilled, (state, {payload}) => {
			entityAdapter.setAll(state, payload);
		});
		builder.addCase(getDish.fulfilled, (state, {payload}) => {
			entityAdapter.setOne(state, payload);
		});
	}
});

export const {selectRequestStatus} = dishesSlice.selectors;
const selectRestaurantsMenuSlice = state => state.dishesSlice;

export const {
	selectIds: selectRestaurantMenuById,
	selectById: selectDishById
} = entityAdapter.getSelectors(selectRestaurantsMenuSlice);
