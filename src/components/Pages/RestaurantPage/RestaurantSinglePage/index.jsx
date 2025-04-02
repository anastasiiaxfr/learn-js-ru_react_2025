import {useParams, Outlet} from 'react-router-dom';

import {useSelector} from 'react-redux';
import {selectRestaurantById} from '../../../../redux/entities/restaurants/slice';
import Tabs from '../../../UI/Tabs/index.jsx';
import Tab from '../../../UI/Tabs/TabLink/index.jsx';

function RestarauntSinglePage() {
	const {restaurantId} = useParams();
	const restaurant = useSelector((state) =>
		selectRestaurantById(state, restaurantId)
	);

	const {name} = restaurant || {};
	const tabs = [
		{title: 'Menu', slug: 'menu'},
		{title: 'Review', slug: 'review'},
	];

	return (
		<div className="container">
			<h1>{name}</h1>
			<Tabs>
				{tabs.map((item) => (
					<Tab key={item.slug} item={item} />
				))}
			</Tabs>
			<Outlet context={restaurantId} />
		</div>
	);
}

export default RestarauntSinglePage;
