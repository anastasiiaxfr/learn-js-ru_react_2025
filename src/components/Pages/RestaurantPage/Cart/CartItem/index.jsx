import {useSelector} from 'react-redux';

import {selectAmountByDishId} from '../../../../../redux/entities/cart/slice';

import {useGetRestaurantByIdQuery} from '../../../../../redux/services/api';
import {useGetDishByDishIdQuery} from '../../../../../redux/services/api';

import Counter from '../../Dishes/Counter';

function CartItem({id, restaurantId, as: Component = 'li'}) {
	const amount = useSelector(state => selectAmountByDishId(state, {id})); // FIXME

	const dish = useGetDishByDishIdQuery(id);

	const restaurant = useGetRestaurantByIdQuery(restaurantId);

	return (
		<Component>
			<b>{restaurant.data.name}</b> - {dish.data.name}: {amount} x{' '}
			{dish.data.price} usd = <b>{amount * dish.data.price} usd</b>
			<br />
			<Counter id={id} />
		</Component>
	);
}

export default CartItem;
