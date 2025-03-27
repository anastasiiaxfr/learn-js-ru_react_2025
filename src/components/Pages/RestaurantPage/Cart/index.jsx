import {useSelector} from 'react-redux';
import {
	selectCartItems,
	selectRestaurantByDishId,
} from '../../../../redux/entities/cart/slice';
import {selectDishById} from '../../../../redux/entities/dishes/slice';
import Counter from '../Dishes/Counter';

import s from './styles.module.sass';

const Cart = () => {
	const items = useSelector(selectCartItems);

	const getRestaurant = useSelector(
		(state) => (id) => selectRestaurantByDishId(state, id)
	);

	const getDish = useSelector((state) => (id) => {
		const {name, price} = selectDishById(state, id);
		return {name, price};
	});

	const totalPrice = items.reduce((total, {id, amount}) => {
		const {price} = getDish(id);
		return total + price * amount;
	}, 0);

	return items.length > 0 ? (
		<div className={s.orders}>
			<ul className={s.orders_list}>
				{items.map(({id, amount}) => (
					<li key={id}>
						<b>{getRestaurant(id)}</b> - {getDish(id).name}: {amount} x{' '}
						{getDish(id).price} usd = <b>{amount * getDish(id).price} usd</b>
						<br />
						<Counter id={id} />
					</li>
				))}
			</ul>
			<hr />
			<p>
				<b>Total:</b> {totalPrice} usd
			</p>
		</div>
	) : null;
};

export default Cart;
