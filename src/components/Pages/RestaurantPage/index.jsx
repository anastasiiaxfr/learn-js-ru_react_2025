import {useSelector} from 'react-redux';
import {Outlet} from 'react-router';

import {selectRestaurantsIds} from '../../../redux/entities/restaurants/slice.js';

import Tabs from '../../UI/Tabs/index.jsx';
import Tags from './Tags';

function Restauraunt() {
	const restaurantsIds = useSelector(selectRestaurantsIds);

	return (
		<>
			<section>
				<div className="container">
					<Tabs>
						{restaurantsIds.map((id) => (
							<Tags key={id} id={id} />
						))}
					</Tabs>
				</div>
			</section>

			<Outlet />
		</>
	);
}

export default Restauraunt;
