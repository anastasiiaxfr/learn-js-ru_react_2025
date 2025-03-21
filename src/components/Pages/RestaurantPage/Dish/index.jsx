import React from 'react';
import Counter from '../../../UI/Counter/index.jsx';
import {useCount} from '../../../UI/Counter/useCount.js';
import s from './styles.module.sass';

function Dish({menu}) {
	const {increment, decrement, count} = useCount();

	return (
		<ul className={s.list}>
			{menu.map(({id, name}) => (
				<li key={id}>
					<span>{name}</span>
					<Counter
						increment={increment}
						decrement={decrement}
						count={count}
					/>
				</li>
			))}
		</ul>
	);
}

export default Dish;
