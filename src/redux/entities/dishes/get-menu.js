import {createAsyncThunk} from '@reduxjs/toolkit';

export const getMenu = createAsyncThunk(
	'dish/getMenu',
	async (restaurantId, {rejectWithValue}) => {
		const response = await fetch(
			`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
		);

		const result = await response.json();

		if (!result.length) {
			return rejectWithValue('no data');
		}

		return result;
	}
);
