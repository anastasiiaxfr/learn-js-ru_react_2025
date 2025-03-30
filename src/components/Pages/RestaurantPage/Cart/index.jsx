import {use} from 'react';
import AuthContext from '../../../Context/AuthContext/constant';

import {useSelector} from 'react-redux';
import {selectCartItemsIds} from '../../../../redux/entities/cart/slice';

import CartItem from './CartItem';
import s from './styles.module.sass';
import TotalSum from './TotalSum';

const Cart = () => {
	const items = useSelector(selectCartItemsIds);
	const {isAuth} = use(AuthContext);

	if (!isAuth) {
		return (
			<p>
				<b>Please authorize to order</b>
			</p>
		);
	}

	return (
		<>
			<h2>Orders:</h2>
			<div className={s.orders}>
				<ul className={s.orders_list}>
					{Object.keys(items).map(itemId => {
						const {restaurant} = items[itemId];

						return (
							<CartItem
								id={itemId}
								key={`order-${itemId}`}
								restaurant={restaurant}
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
