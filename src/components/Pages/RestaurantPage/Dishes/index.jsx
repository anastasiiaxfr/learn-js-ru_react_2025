import DishList from './Dish';

import s from './styles.module.sass';

function Dish({menu, restaurantId}) {
	return (
		<ul className={s.list}>
			{menu.map((dish) => (
				<DishList id={dish} restaurantId={restaurantId} key={dish} />
			))}
		</ul>
	);
}

export default Dish;
