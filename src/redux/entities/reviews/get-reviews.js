import {createAsyncThunk} from '@reduxjs/toolkit';

export const getReviews = createAsyncThunk(
	'restaurants/getReview',
	async (restaurantId, {rejectWithValue}) => {
		const response = await fetch(
			`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
		);

		const result = await response.json();

		if (!result.length) {
			return rejectWithValue('no data');
		}

		return result;
	}
);
