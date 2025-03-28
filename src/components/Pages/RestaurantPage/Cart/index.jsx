import {useSelector} from 'react-redux';
import {selectCartItemsIds} from '../../../../redux/entities/cart/slice';

import CartItem from './CartItem';
import s from './styles.module.sass';
import TotalSum from './TotalSum';

const Cart = () => {
	const items = useSelector(selectCartItemsIds);

	return items.length > 0 ? (
		<>
			<h2>Orders:</h2>
			<div className={s.orders}>
				<ul className={s.orders_list}>
					{items.map((item) => (
						<CartItem id={item} key={`order-${item}`} />
					))}
				</ul>
				<hr />
				<TotalSum />
			</div>
		</>
	) : null;
};

export default Cart;
