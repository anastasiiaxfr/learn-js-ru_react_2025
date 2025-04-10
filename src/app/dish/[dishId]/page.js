import DishPage from '../../../components/Pages/DishPage';

const DishPageWrapper = async ({ params }) => {
  const { dishId } = await params;
  return <DishPage dishId={dishId} />;
};

export default DishPageWrapper;