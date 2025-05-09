'use client';
import {use} from 'react';
import {
	useGetRestaurantByIdQuery,
	useAddReviewMutation,
} from '../../../../redux/services/api.js';
import AuthContext from '../../../Context/AuthContext/constant';
import Tabs from '../../../UI/Tabs/index.jsx';
import Tab from '../../../UI/Tabs/TabLink/index.jsx';
import Cart from '../../../Pages/RestaurantPage/Cart';
import ReviewForm from '../../../UI/Forms/ReviewForm';

function RestarauntSinglePage({restaurantId}) {
	const {isAuth} = use(AuthContext);

	const {data, isLoading, isError} = useGetRestaurantByIdQuery(restaurantId);

	const [addReview, {isLoading: isAddReviewLoading}] = useAddReviewMutation();

	const handleSubmit = (review) => {
		addReview({restaurantId: restaurantId, review});
	};

	const {name} = data || {};

	const tabs = [
		{title: 'Menu', slug: `/restaurants/${restaurantId}/menu`},
		{title: 'Review', slug: `/restaurants/${restaurantId}/review`},
	];

	if (isLoading) {
		return 'loading...';
	}

	if (isError) {
		return 'ERROR';
	}

	return (
		<div className="">
			<h1>{name}</h1>
			<Tabs>
				{tabs.map((item) => (
					<Tab key={item.slug} item={item} />
				))}
			</Tabs>
			{isAuth && (
				<div className="container">
					<Cart />
					<h2>Reviews:</h2>
					<ReviewForm
						onSubmit={handleSubmit}
						isSubmitButtonDisabled={isAddReviewLoading}
					/>
				</div>
			)}
		</div>
	);
}

export default RestarauntSinglePage;
