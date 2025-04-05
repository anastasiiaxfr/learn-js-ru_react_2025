import {useOutletContext} from 'react-router-dom';
import {useRequest} from '../../../../../redux/hooks/use-request.js';
import {useSelector} from 'react-redux';
import {getReviews} from '../../../../../redux/entities/reviews/get-reviews.js';
import {IDLE, PENDING, REJECTED} from '../../../../../redux/constant.js';
import {selectRestaurantReviewsById} from '../../../../../redux/entities/reviews/slice';
import Review from '../../Review';

function RestaurantReview() {
	const restaurantId = useOutletContext();
	const requestStatus = useRequest(getReviews, restaurantId);

	const reviews = useSelector(state =>
		selectRestaurantReviewsById(state, restaurantId)
	);

	if (requestStatus === IDLE || requestStatus === PENDING) {
		return 'loading Reviews...';
	}

	if (requestStatus === REJECTED) {
		return 'error';
	}

	return (
		<div>
			<h2>Reviews:</h2>
			<Review reviews={reviews} />
		</div>
	);
}

export default RestaurantReview;
