'use client';
import {
	useGetReviewsByRestaurantIdQuery,
	useGetUsersQuery,
} from '../../../../../redux/services/api';
import Review from '../../Review';

function RestaurantReview({restaurantId}) {
	const {isLoading: isUsersLoading, isError: isUsersError} = useGetUsersQuery();

	const {
		data,
		isFetching: isReviewsLoading,
		isError: isReviewsError,
	} = useGetReviewsByRestaurantIdQuery(restaurantId);

	const isLoading = isUsersLoading || isReviewsLoading;

	const isError = isUsersError || isReviewsError;

	if (isLoading) {
		return 'loading...';
	}

	if (isError) {
		return 'ERROR';
	}

	return (
		<div>
			<h2>Reviews:</h2>
			<Review reviews={data} />
		</div>
	);
}

export default RestaurantReview;
