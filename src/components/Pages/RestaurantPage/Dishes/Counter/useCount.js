import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
	addToCart,
	removeFromCart,
	selectAmountByDishId
} from '../../../../../redux/entities/cart/slice';

export default function useCount(id) {
	const dispatch = useDispatch();
	const value = useSelector(state => selectAmountByDishId(state, id)) || 0;

	const increment = useCallback(() => dispatch(addToCart(id)), [dispatch, id]);

	const decrement = useCallback(() => dispatch(removeFromCart(id)), [
		dispatch,
		id
	]);

	return {
		value,
		increment,
		decrement
	};
}
