import {useSelector} from 'react-redux';
import {selectRestaurantByDishId} from '../../../../../redux/entities/restaurants/slice';
import {selectDishById} from '../../../../../redux/entities/dishes/slice';
import {selectAmountByDishId} from '../../../../../redux/entities/cart/slice';

import Counter from '../../Dishes/Counter';

function CartItem({id, as: Component = 'li'}) {
	const amount = useSelector((state) => selectAmountByDishId(state, id));

	const dish = useSelector((state) => selectDishById(state, id));

	const restaurant = useSelector((state) =>
		selectRestaurantByDishId(state, id)
	);

	return (
		<Component>
			<b>{restaurant}</b> - {dish.name}: {amount} x {dish.price} usd ={' '}
			<b>{amount * dish.price} usd</b>
			<br />
			<Counter id={id} />
		</Component>
	);
}

export default CartItem;
