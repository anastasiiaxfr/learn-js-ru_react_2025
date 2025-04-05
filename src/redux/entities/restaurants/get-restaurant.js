import {createAsyncThunk} from '@reduxjs/toolkit';
import {selectRestaurantsIds} from './slice';

export const getRestaurant = createAsyncThunk(
	'restaurants/getRestaurant',
	async (restaurantId, {rejectWithValue}) => {
		const response = await fetch(
			`http://localhost:3001/api/restaurant/${restaurantId}`
		);

		const result = await response.json();

		if (!result.length) {
			return rejectWithValue('no data');
		}

		return result;
	},
	{
		condition: (restaurantId, {getState}) => {
			return !selectRestaurantsIds(getState()).includes(restaurantId);
		}
	}
);
