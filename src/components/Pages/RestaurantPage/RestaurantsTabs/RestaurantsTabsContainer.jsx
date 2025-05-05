import {getRestaurants} from '@/services/get-restaurants';
import {RestaurantsTabs} from './';

export const RestaurantsTabsContainer = async () => {
	const data = await getRestaurants();

	if (!data.length) {
		return null;
	}

	return <RestaurantsTabs restaurants={data} />;
};
