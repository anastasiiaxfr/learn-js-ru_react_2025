import React from 'react';
import Counter from './Counter';
import s from './styles.module.sass';

function Dish({menu}) {
	return (
		<ul className={s.list}>
			{menu.map(({id, name}) => (
				<li key={id}>
					<span>{name}</span>
					<Counter id={id} />
				</li>
			))}
		</ul>
	);
}

export default Dish;
