import RestaurantReview  from '../../../../components/Pages/RestaurantPage/RestaurantSinglePage/Review';

const ReviewWrapper = async ({ params }) => {
    const { restaurantId } = await params;

    return <RestaurantReview restaurantId={restaurantId}/>;
};

export default ReviewWrapper;