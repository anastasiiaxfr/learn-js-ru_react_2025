import {useOutletContext} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectRestaurantById} from '../../../../../redux/entities/restaurants/slice';
import Review from '../../Review';

function RestaurantReview() {
	const restaurantId = useOutletContext();

	const restaurant = useSelector((state) =>
		selectRestaurantById(state, restaurantId)
	);
	const {reviews} = restaurant || {};
	return (
		<div>
			<h2>Reviews:</h2>
			<Review reviews={reviews} />
		</div>
	);
}

export default RestaurantReview;
