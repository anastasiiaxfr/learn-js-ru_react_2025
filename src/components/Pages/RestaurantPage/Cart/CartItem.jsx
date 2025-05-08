'use client';

import {useSelector} from 'react-redux';
import {selectAmountByDishId} from '../../../../redux/entities/cart/slice';

import {
	useGetRestaurantByIdQuery,
	useGetDishByDishIdQuery,
} from '../../../../redux/services/api';

import Counter from '../Dishes/Counter';

function CartItem({id, restaurantId, as: Component = 'li'}) {
	const amount = useSelector((state) => selectAmountByDishId(state, {id}));

	const {
		data: dish,
		isLoading: dishLoading,
		isError: dishError,
	} = useGetDishByDishIdQuery(id);

	const {
		data: restaurant,
		isLoading: restaurantLoading,
		isError: restaurantError,
	} = useGetRestaurantByIdQuery(restaurantId);

	if (dishLoading || restaurantLoading) return null;

	if (dishError || restaurantError || !dish || !restaurant) return null;

	return (
		<Component>
			<b>{restaurant.name}</b> — {dish.name}: {amount} × {dish.price} USD ={' '}
			<b>{amount * dish.price} USD</b>
			<br />
			<Counter id={id} restaurantId={restaurantId} />
		</Component>
	);
}

export default CartItem;
