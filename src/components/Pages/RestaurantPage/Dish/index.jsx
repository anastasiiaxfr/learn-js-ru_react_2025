import {use} from 'react';
import AuthContext from '../../../Context/AuthContext/constant';
import Counter from './Counter';
import s from './styles.module.sass';

function Dish({menu}) {
	const {isAuth} = use(AuthContext);
	return (
		<ul className={s.list}>
			{menu.map(({id, name}) => (
				<li key={id}>
					<span>{name}</span>
					{isAuth && <Counter id={id} />}
				</li>
			))}
		</ul>
	);
}

export default Dish;
