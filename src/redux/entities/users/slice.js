import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import {getUsers} from './get-users.js';

export const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
	name: 'usersSlice',
	initialState: entityAdapter.getInitialState(),
	selectors: {
		selectRequestStatus: state => state.requestStatus
	},
	extraReducers: builder => {
		builder.addCase(getUsers.fulfilled, (state, {payload}) => {
			entityAdapter.setAll(state, payload);
		});
	}
});

export const {selectRequestStatus} = usersSlice.selectors;
const selectUsersSlice = state => state.usersSlice;

export const {
	selectIds: selectUsersIds,
	selectById: selectUserById
} = entityAdapter.getSelectors(selectUsersSlice);
