import {useSelector} from 'react-redux';
import {Outlet} from 'react-router';
import {getRestaurants} from '../../../redux/entities/restaurants/get-restaurants.js';
import {useRequest} from '../../../redux/hooks/use-request';
import {selectRestaurantsIds} from '../../../redux/entities/restaurants/slice.js';
import {IDLE, PENDING, REJECTED} from '../../../redux/constant.js';
import Tabs from '../../UI/Tabs/index.jsx';
import Tags from './Tags';

function RestaurauntsPage() {
	const requestStatus = useRequest(getRestaurants);
	const restaurantsIds = useSelector(selectRestaurantsIds);

	if (requestStatus === IDLE || requestStatus === PENDING) {
		return 'loading...';
	}

	if (requestStatus === REJECTED) {
		return 'error';
	}

	return (
		<>
			<section>
				<div className="container">
					<Tabs>
						{restaurantsIds.map(id => (
							<Tags key={id} id={id} />
						))}
					</Tabs>
				</div>
			</section>

			<Outlet />
		</>
	);
}

export default RestaurauntsPage;
