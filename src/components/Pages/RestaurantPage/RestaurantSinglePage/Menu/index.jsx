import {useOutletContext} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectRestaurantById} from '../../../../../redux/entities/restaurants/slice';
import Dishes from '../../Dishes';

function RestaurantMenu() {
	const restaurantId = useOutletContext();
	const restaurant = useSelector((state) =>
		selectRestaurantById(state, restaurantId)
	);
	const {menu} = restaurant || {};

	return (
		<div>
			<h2>Menu:</h2>
			<Dishes menu={menu} restaurantId={restaurantId} />
		</div>
	);
}

export default RestaurantMenu;
