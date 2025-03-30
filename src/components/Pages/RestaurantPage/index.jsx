<<<<<<< HEAD
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {use} from 'react';
import AuthContext from '../../Context/AuthContext/constant.js';

import {selectRestaurantsIds} from '../../../redux/entities/restaurants/slice.js';
import {selectRestaurantById} from '../../../redux/entities/restaurants/slice.js';
import Card from './Card/index.jsx';
import Cart from './Cart/index.jsx';
import ReviewForm from '../../UI/Forms/ReviewForm/index.jsx';
=======
import {useSelector} from 'react-redux';
import {Outlet} from 'react-router';

import {selectRestaurantsIds} from '../../../redux/entities/restaurants/slice.js';
>>>>>>> 0300512 (hw-8)

import Tabs from '../../UI/Tabs/index.jsx';
import Tags from './Tags';

function Restauraunt() {
<<<<<<< HEAD
	const {isAuth} = use(AuthContext);

	const restaurantsIds = useSelector(selectRestaurantsIds);
	const [activeRestaurantId, setActiveRestaurantId] = useState(
		restaurantsIds[0]
	);

	const restaurant = useSelector((state) =>
		selectRestaurantById(state, activeRestaurantId)
	);

	const handleSetActiveRestaurantId = (id) => {
		if (activeRestaurantId === id) {
			return;
		}

		setActiveRestaurantId(id);
	};
=======
	const restaurantsIds = useSelector(selectRestaurantsIds);
>>>>>>> 0300512 (hw-8)

	return (
		<>
			<section>
				<div className="container">
					<Tabs>
<<<<<<< HEAD
						{restaurantsIds.map((id) => (
							<Tags
								key={id}
								id={id}
								onClick={() => handleSetActiveRestaurantId(id)}
								isActive={id === activeRestaurantId}
							/>
=======
						{restaurantsIds.map(id => (
							<Tags key={id} id={id} />
>>>>>>> 0300512 (hw-8)
						))}
					</Tabs>
				</div>
			</section>

<<<<<<< HEAD
			{activeRestaurantId && (
				<section>
					<div className="container">
						<Card data={restaurant} />
						{isAuth && (
							<>
								<Cart />

								<div>
									<h2>Reviews:</h2>
									<ReviewForm />
								</div>
							</>
						)}
					</div>
				</section>
			)}
=======
			<Outlet />
>>>>>>> 0300512 (hw-8)
		</>
	);
}

export default Restauraunt;
