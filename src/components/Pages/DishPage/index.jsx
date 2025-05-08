import {getMenuByDishId} from '@/services/get-menu-by-dish-id';

import {DishContainer} from '@/components/Pages/DishPage/DishContainer';
import {Suspense} from 'react';

const DishPage = ({dishId}) => {
	const menuPromise = getMenuByDishId(dishId);

	return (
		<main className="page">
			<div className="container">
				<Suspense fallback="loading...">
					<DishContainer menuPromise={menuPromise} dishId={dishId} />
				</Suspense>
			</div>
		</main>
	);
};

export default DishPage;
