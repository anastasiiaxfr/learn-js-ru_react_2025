import {configureStore} from '@reduxjs/toolkit';
import { cartSlice } from "./entities/cart/slice";

import {api} from './services/api';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		[cartSlice.name]: cartSlice.reducer,
	},
	middleware: getDefaultMiddlewares =>
		getDefaultMiddlewares().concat(api.middleware)
});
