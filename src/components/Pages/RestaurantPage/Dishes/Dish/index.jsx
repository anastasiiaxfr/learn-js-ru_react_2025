import {useSelector} from 'react-redux';
import {selectDishById} from '../../../../../redux/entities/dishes/slice';
import {Link, Outlet} from 'react-router';

function Dish({id, resId}) {
	const {name, price} = useSelector(state => selectDishById(state, id));

	return (
		<li>
			<span>
				{name}: <b>{price} usd</b>
			</span>
			&nbsp; &rarr; &nbsp;
			<Link to={`/dish/${id}?res=${resId}`}>Order</Link>
			<Outlet />
		</li>
	);
}

export default Dish;
