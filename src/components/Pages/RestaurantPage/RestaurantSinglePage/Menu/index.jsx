import {useParams} from 'react-router';
import {useSelector} from 'react-redux';
import {selectRestaurantById} from '../../../../../redux/entities/restaurants/slice';
import Dishes from '../../Dishes';

function RestaurantMenu() {
	const {restaurantId} = useParams();

	const restaurant = useSelector(state =>
		selectRestaurantById(state, restaurantId)
	);
	const {menu} = restaurant || {};

	return (
		<div>
			<h2>Menu:</h2>
			<Dishes menu={menu} resId={restaurantId} />
		</div>
	);
}

export default RestaurantMenu;
