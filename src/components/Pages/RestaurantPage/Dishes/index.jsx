import DishList from './Dish';

import s from './styles.module.sass';

function Dish({menu, restaurantId}) {
	return (
		<ul className={s.list}>
			{menu.map((data) => (
				<DishList data={data} restaurantId={restaurantId} key={data.id} />
			))}
		</ul>
	);
}

export default Dish;
