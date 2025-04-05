import {useParams, Outlet} from 'react-router-dom';
import {useRequest} from '../../../../redux/hooks/use-request.js';
import {useDispatch, useSelector} from 'react-redux';
import {getRestaurant} from '../../../../redux/entities/restaurants/get-restaurant.js';
import {selectRestaurantById} from '../../../../redux/entities/restaurants/slice';
import Tabs from '../../../UI/Tabs/index.jsx';
import Tab from '../../../UI/Tabs/TabLink/index.jsx';
import {IDLE, PENDING, REJECTED} from '../../../../redux/constant.js';
function RestarauntSinglePage() {
	const {restaurantId} = useParams();
	const dispatch = useDispatch();

	const requestStatus = useRequest(getRestaurant, restaurantId);

	const restaurant = useSelector(state =>
		selectRestaurantById(state, restaurantId)
	);

	const {name} = restaurant || {};
	const tabs = [
		{title: 'Menu', slug: 'menu'},
		{title: 'Review', slug: 'review'}
	];

	if (requestStatus === IDLE) {
		dispatch(getRestaurant(restaurantId));
	}

	if (requestStatus === PENDING) {
		return 'loading...';
	}

	if (requestStatus === REJECTED) {
		return 'error';
	}

	return (
		<div className="container">
			<h1>{name}</h1>
			<Tabs>
				{tabs.map(item => (
					<Tab key={item.slug} item={item} />
				))}
			</Tabs>
			<Outlet context={restaurantId} />
		</div>
	);
}

export default RestarauntSinglePage;
