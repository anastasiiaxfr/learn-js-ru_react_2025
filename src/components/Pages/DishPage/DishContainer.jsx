import {Dish} from './Dish';
import {use} from 'react';

export const DishContainer = ({menuPromise}) => {
	const dish = use(menuPromise);
	return <Dish dish={dish} />;
};
