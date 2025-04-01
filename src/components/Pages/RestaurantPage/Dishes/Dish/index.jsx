import {useSelector} from 'react-redux';
import {selectDishById} from '../../../../../redux/entities/dishes/slice';
import {Link} from 'react-router';
import {Outlet} from 'react-router-dom';

function Dish({id, restaurantId}) {
	const {name, price} = useSelector((state) => selectDishById(state, id));

	return (
		<li>
			<span>
				{name}: <b>{price} usd</b>
			</span>
			&nbsp; &rarr; &nbsp;
			<Link to={`/dish/${id}?res=${restaurantId}`}>Order</Link>
			<Outlet />
		</li>
	);
}

export default Dish;
