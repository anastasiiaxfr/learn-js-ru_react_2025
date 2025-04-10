import RestaurantPage from '../../../components/Pages/RestaurantPage/RestaurantSinglePage'

const Page = async ({ params }) => {
    const {restaurauntId} = await params

    return <RestaurantPage restaurauntId={restaurauntId}/>;
};
  
export default Page;