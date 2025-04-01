import DishList from './Dish';

import s from './styles.module.sass';

function Dish({menu, restaurantId}) {
	return (
		<ul className={s.list}>
			{menu.map((dishId) => (
				<DishList id={dishId} restaurantId={restaurantId} key={dishId} />
			))}
		</ul>
	);
}

export default Dish;
