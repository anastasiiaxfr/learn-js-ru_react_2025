import {createSlice} from '@reduxjs/toolkit';
import {IDLE, PENDING, REJECTED, FULFILLED} from '../../constant.js';
export const requestSlice = createSlice({
	name: 'request',
	initialState: {},
	selectors: {
		selectIsLoading: (state, id) => state[id] === PENDING,
		selectRequestStatus: (state, id) => state[id] || IDLE
	},
	extraReducers: builder =>
		builder
			.addMatcher(
				({type}) => type.endsWith(PENDING),
				(state, {meta}) => {
					state[meta.requestId] = PENDING;
				}
			)
			.addMatcher(
				({type}) => type.endsWith(REJECTED),
				(state, {meta}) => {
					state[meta.requestId] = REJECTED;
				}
			)
			.addMatcher(
				({type}) => type.endsWith(FULFILLED),
				(state, {meta}) => {
					state[meta.requestId] = FULFILLED;
				}
			)
});

export const {selectIsLoading, selectRequestStatus} = requestSlice.selectors;
