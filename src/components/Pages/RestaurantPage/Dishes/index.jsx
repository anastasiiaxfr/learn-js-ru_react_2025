import DishList from './Dish';

import s from './styles.module.sass';

function Dish({menu}) {
	return (
		<ul className={s.list}>
			{menu.map((dish) => (
				<DishList id={dish} key={`dish-${dish}`} />
			))}
		</ul>
	);
}

export default Dish;
