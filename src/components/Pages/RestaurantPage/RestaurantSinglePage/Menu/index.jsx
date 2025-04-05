import {useOutletContext} from 'react-router-dom';
import {useRequest} from '../../../../../redux/hooks/use-request.js';
import {useSelector} from 'react-redux';
import {getMenu} from '../../../../../redux/entities/dishes/get-menu.js';
import {selectRestaurantMenuById} from '../../../../../redux/entities/dishes/slice';
import Dishes from '../../Dishes';
import {IDLE, PENDING, REJECTED} from '../../../../../redux/constant.js';
function RestaurantMenu() {
	const restaurantId = useOutletContext();
	const requestStatus = useRequest(getMenu, restaurantId);
	const menu = useSelector(state =>
		selectRestaurantMenuById(state, restaurantId)
	);

	if (requestStatus === IDLE || requestStatus === PENDING) {
		return 'loading Menu...';
	}

	if (requestStatus === REJECTED) {
		return 'error';
	}

	return (
		<div>
			<h2>Menu:</h2>
			<Dishes menu={menu} restaurantId={restaurantId} />
		</div>
	);
}

export default RestaurantMenu;
