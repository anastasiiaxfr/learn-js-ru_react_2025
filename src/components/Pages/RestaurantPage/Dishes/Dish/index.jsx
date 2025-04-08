import {Link} from 'react-router';

function Dish({data, restaurantId}) {
	const {name, price, id} = data;

	return (
		<li>
			<span>
				{name}: <b>{price} usd</b>
			</span>{' '}
			<Link to={`/dish/${id}?restaurantId=${restaurantId}`}>About</Link>
		</li>
	);
}

export default Dish;
