import {RestaurantContainer} from '@/components/Pages/RestaurantPage/RestaurantContainer';

export const RestaurantLayout = async ({children, params}) => {
	const {restaurauntId} = await params;

	return (
		<div>
			<RestaurantContainer id={restaurauntId} />
			{children}
		</div>
	);
};
