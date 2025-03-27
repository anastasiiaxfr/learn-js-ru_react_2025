import {use} from 'react';
import {useSelector} from 'react-redux';
import {selectDishById} from '../../../../redux/entities/dishes/slice';

import AuthContext from '../../../Context/AuthContext/constant';
import Counter from './Counter';
import s from './styles.module.sass';

function Dish({menu}) {
	const {isAuth} = use(AuthContext);
	const getDish = useSelector(state => id => {
		const {name, price} = selectDishById(state, id);
		return {name, price};
	});

	return (
		<ul className={s.list}>
			{menu.map(dish => (
				<li key={dish}>
					<span>
						{getDish(dish).name}: <b>{getDish(dish).price} usd</b>
					</span>
					{isAuth && <Counter id={dish} />}
				</li>
			))}
		</ul>
	);
}

export default Dish;
