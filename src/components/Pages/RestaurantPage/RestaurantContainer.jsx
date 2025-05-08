import Restaurant from './Restaurant';
import {getRestaurants} from '@/services/get-restaurants';

export const RestaurantContainer = async ({id}) => {
	const restaurants = await getRestaurants();

	const restaurant = restaurants.find(
		({id: restaurantId}) => restaurantId === id
	);

	if (!restaurant) {
		return null;
	}

	const {name, description} = restaurant;
	return (
		<>
			<Restaurant id={id} name={name} description={description} />
		</>
	);
};
