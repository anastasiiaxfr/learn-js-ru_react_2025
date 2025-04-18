import {use} from 'react';
import {useParams, useNavigate} from 'react-router';
import {useSearchParams} from 'react-router';
import {useGetDishByDishIdQuery} from '../../../redux/services/api';
import AuthContext from '../../Context/AuthContext/constant';
import Counter from '../../Pages/RestaurantPage/Dishes/Counter';
import Button from '../../UI/Button';

function DishPage() {
	const {dishId} = useParams();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	const {isAuth} = use(AuthContext);

	const restaurantId = searchParams.get('restaurantId');

	const {data, isLoading, isError} = useGetDishByDishIdQuery(dishId);

	if (isLoading) {
		return 'loading...';
	}

	if (isError) {
		return 'ERROR';
	}

	const {name, price, ingredients} = data;

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
