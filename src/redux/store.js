import {configureStore} from '@reduxjs/toolkit';
import {restaurantsSlice} from './entities/restaurants/slice';
import {dishesSlice} from './entities/dishes/slice';
import {reviewsSlice} from './entities/reviews/slice';
import {cartSlice} from './entities/cart/slice';

export const store = configureStore({
	reducer: {
		[restaurantsSlice.name]: restaurantsSlice.reducer,
		[dishesSlice.name]: dishesSlice.reducer,
		[reviewsSlice.name]: reviewsSlice.reducer,
<<<<<<< HEAD
    [cartSlice.name]: cartSlice.reducer,
    
=======
		[cartSlice.name]: cartSlice.reducer
>>>>>>> 0300512 (hw-8)
	}
});
