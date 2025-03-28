import {useSelector} from 'react-redux';
import {selectCartItems} from '../../../../redux/entities/cart/slice';

import CartItem from './CartItem';
import s from './styles.module.sass';
import TotalSum from './TotalSum';

const Cart = () => {
	const items = useSelector(selectCartItems);

	return (
		<>
			<h2>Orders:</h2>
			<div className={s.orders}>
				<ul className={s.orders_list}>
					{Object.keys(items).map((itemId) => {
						const {restaurantId} = items[itemId];

						return (
							<CartItem
								id={itemId}
								key={itemId}
								restaurantId={restaurantId}
							/>
						);
					})}
				</ul>
				<hr />
				<TotalSum />
			</div>
		</>
	);
};

export default Cart;
