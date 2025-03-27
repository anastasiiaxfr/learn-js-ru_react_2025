import {useState, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {use} from 'react';
import AuthContext from '../../Context/AuthContext/constant.js';

import {selectRestaurantsIds} from '../../../redux/entities/restaurants/slice.js';
import {selectRestaurantById} from '../../../redux/entities/restaurants/slice.js';
import Card from './Card/index.jsx';
import Cart from './Cart/index.jsx';
import ReviewForm from '../../UI/Forms/ReviewForm/index.jsx';

import Tags from '../../UI/Tags';

function Restauraunt() {
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

	return (
		<>
			<section>
				<div className="container">
					<Tags
						data={restaurantsIds}
						setData={selectRestaurantById}
						onClick={handleSetActiveRestaurantId}
						selected={activeRestaurantId}
					/>
				</div>
			</section>

			{activeRestaurantId && (
				<section>
					<div className="container">
						<Card data={restaurant} />
						{isAuth && (
							<>
								<div>
									<h2>Orders:</h2>
									<Cart />
								</div>
								<div>
									<h2>Reviews:</h2>
									<ReviewForm />
								</div>
							</>
						)}
					</div>
				</section>
			)}
		</>
	);
}

export default Restauraunt;
