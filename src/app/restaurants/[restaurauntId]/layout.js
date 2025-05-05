import '@/styles/styles.sass';

import RestaurantPage from '../../../components/Pages/RestaurantPage/RestaurantSinglePage';

const Page = async ({params, children}) => {
	const {restaurauntId} = await params;

	return (
		<main className="page">
			<div className="container">
				<RestaurantPage restaurauntId={restaurauntId} />
				{children}
			</div>
		</main>
	);
};

export default Page;
