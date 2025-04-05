import {use} from 'react';
import {useRequest} from '../../../redux/hooks/use-request.js';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useNavigate} from 'react-router';
import {useSearchParams} from 'react-router';
import {getDish} from '../../../redux/entities/dishes/get-dish.js';

import AuthContext from '../../Context/AuthContext/constant';
import {selectDishById} from '../../../redux/entities/dishes/slice';
import Counter from '../../Pages/RestaurantPage/Dishes/Counter';
import Button from '../../UI/Button';
import {IDLE, PENDING, REJECTED} from '../../../redux/constant.js';

function DishPage() {
	const dispatch = useDispatch();

	const {dishId} = useParams();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	const {isAuth} = use(AuthContext);

	const restaurantId = searchParams.get('res');
	const requestStatus = useRequest(getDish, dishId);

	const dish = useSelector(state => selectDishById(state, dishId));

	const {name, price, ingredients} = dish;

	if (requestStatus === IDLE) {
		dispatch(getDish(dishId));
	}

	if (requestStatus === PENDING) {
		return 'loading...';
	}

	if (requestStatus === REJECTED) {
		return 'error';
	}

	return (
		<div className="container">
			<h2>{name}</h2>
			<p>
				<b>Price:</b> {price} usd
			</p>
			{isAuth && <Counter id={dishId} restaurantId={restaurantId} />}
			<h3>Ingredients:</h3>
			<ul>
				{ingredients.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			<Button onClick={() => navigate(-1)} style="bd">
				Go Back
			</Button>
		</div>
	);
}

export default DishPage;
