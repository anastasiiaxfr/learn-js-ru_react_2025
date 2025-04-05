import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import {getReviews} from './get-reviews.js';

export const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
	name: 'reviewsSlice',
	initialState: entityAdapter.getInitialState(),
	selectors: {
		selectRequestStatus: state => state.requestStatus
	},
	extraReducers: builder => {
		builder.addCase(getReviews.fulfilled, (state, {payload}) => {
			entityAdapter.setAll(state, payload);
		});
	}
});

export const {selectRequestStatus} = reviewsSlice.selectors;
const selectRestaurantsReviewsSlice = state => state.reviewsSlice;

export const {
	selectIds: selectRestaurantReviewsById,
	selectById: selectReviewById
} = entityAdapter.getSelectors(selectRestaurantsReviewsSlice);
