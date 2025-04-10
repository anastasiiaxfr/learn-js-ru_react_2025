'use client';
import {useGetDishesByRestaurantIdQuery} from '../../../../../redux/services/api';
import Dishes from '../../Dishes';

function RestaurantMenu({restaurantId}) {
	const {data, isLoading, isError} =
		useGetDishesByRestaurantIdQuery(restaurantId);

	if (isLoading) {
		return 'loading...';
	}

	if (isError) {
		return 'ERROR';
	}

	return (
		<div>
			<h2>Menu:</h2>
			<Dishes menu={data} restaurantId={restaurantId} />
		</div>
	);
}

export default RestaurantMenu;
