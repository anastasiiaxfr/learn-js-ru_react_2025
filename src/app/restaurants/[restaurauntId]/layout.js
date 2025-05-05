import { RestaurantLayout } from "@/components/Layout/RestaurantLayout";
import { getRestaurants } from "@/services/get-restaurants";

export const generateMetadata = async ({ params }) => {
	const { restaurauntId } = await params;
  
	const restaurants = await getRestaurants();
  
	const restaurant = restaurants.find(({ id }) => restaurauntId === id);


	return {
	  title: restaurant.name,
	};
  };
  
  export default RestaurantLayout;