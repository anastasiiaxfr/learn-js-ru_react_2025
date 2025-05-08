import {Suspense} from 'react';
import {RestaurantsTabsContainer} from '@/components/Pages/RestaurantPage/RestaurantsTabs/RestaurantsTabsContainer';

export const RestaurantsLayout = ({children}) => {
	return (
		<main className="page">
			<div className="container">
				<Suspense fallback="...loading">
					<RestaurantsTabsContainer />
				</Suspense>
				{children}
			</div>
		</main>
	);
};
