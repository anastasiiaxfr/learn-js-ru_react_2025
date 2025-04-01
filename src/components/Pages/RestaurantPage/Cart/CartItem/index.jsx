import {useSelector} from 'react-redux';

import {selectDishById} from '../../../../../redux/entities/dishes/slice';
import {selectAmountByDishId} from '../../../../../redux/entities/cart/slice';

import {selectRestaurantById} from '../../../../../redux/entities/restaurants/slice';

import Counter from '../../Dishes/Counter';

function CartItem({id, restaurantId, as: Component = 'li'}) {
	const amount = useSelector((state) => selectAmountByDishId(state, {id}));

	const dish = useSelector((state) => selectDishById(state, id));

	const restaurantName = useSelector((state) =>
		selectRestaurantById(state, restaurantId)
	);

	return (
		<Component>
			<b>{restaurantName.name}</b> - {dish.name}: {amount} x {dish.price} usd ={' '}
			<b>{amount * dish.price} usd</b>
			<br />
			<Counter id={id} />
		</Component>
	);
}

export default CartItem;
