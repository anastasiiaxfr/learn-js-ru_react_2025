'use client';
import {use} from 'react';

import {useSelector} from 'react-redux';
import AuthContext from '@/components/Context/AuthContext/constant';

import {selectCartItems} from '../../../../redux/entities/cart/slice';

import CartItem from './CartItem';
import s from './styles.module.sass';
import TotalSum from './TotalSum';

export default function Cart() {
	const items = useSelector(selectCartItems);
	const {isAuth} = use(AuthContext);

	return isAuth ? (
		<div className="container">
			<h2>Orders: </h2>
			{Object.keys(items).map((itemId) => {
				const {restaurantId} = items[itemId];

				return (
					<ul key={itemId}>
						<CartItem id={itemId} key={itemId} restaurantId={restaurantId} />
					</ul>
				);
			})}
			<hr />
			<TotalSum />
		</div>
	) : null;
}
