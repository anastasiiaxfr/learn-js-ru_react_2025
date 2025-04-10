import Menu from '../../../../components/Pages/RestaurantPage/RestaurantSinglePage/Menu';

const MenuWrapper = async ({ params }) => {
    const { restaurantId } = await params;
    return <Menu restaurantId={restaurantId} />;
};

export default MenuWrapper;