import {useSelector} from 'react-redux';
import {Link} from 'react-router';
import {selectDishById} from '../../../../../redux/entities/dishes/slice';

function Dish({id, restaurantId}) {
	const {name, price} = useSelector(state => selectDishById(state, id));

	return (
		<li>
			<span>
				{name}: <b>{price} usd</b>
			</span>{' '}
			<Link to={`/dish/${id}?res=${restaurantId}`}>About</Link>
		</li>
	);
}

export default Dish;
