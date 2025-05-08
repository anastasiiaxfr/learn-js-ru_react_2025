import {Dishes} from './Dishes';
import {use} from 'react';

export const DishesContainer = ({menuPromise, restaurantId}) => {
	const dishes = use(menuPromise);

	if (!dishes.length) {
		return null;
	}

	return <Dishes dishes={dishes} restaurantId={restaurantId} />;
};
