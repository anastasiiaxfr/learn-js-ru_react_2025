import DishList from './Dish';

import s from './styles.module.sass';

function Dish({menu, resId}) {
	return (
		<ul className={s.list}>
			{menu.map((dish) => (
				<DishList id={dish} resId={resId} key={`dish-${dish}`} />
			))}
		</ul>
	);
}

export default Dish;
