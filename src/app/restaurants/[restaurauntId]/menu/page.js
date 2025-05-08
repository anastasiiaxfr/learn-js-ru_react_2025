import { DishesContainer } from "@/components/Pages/DishPage/DishesContainer"
import { getMenuByRestaurantId } from "@/services/get-menu-by-restaurant-id";
import { Suspense } from "react";

const RestauraunMenuPage = async ({ params }) => {
  const { restaurauntId } = await params;

  const menuPromise = getMenuByRestaurantId(restaurauntId);

  return (
    <Suspense fallback='loading...'>
      <DishesContainer
        menuPromise={menuPromise}
        restaurantId={restaurauntId}
      />
    </Suspense>
  );
};

export default RestauraunMenuPage;