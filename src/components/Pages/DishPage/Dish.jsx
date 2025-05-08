'use client';

import {use} from 'react';
import {useSearchParams, useRouter} from 'next/navigation';

import AuthContext from '@/components/Context/AuthContext/constant';

import Counter from '@/components/Pages/RestaurantPage/Dishes/Counter';
import Button from '@/components/UI/Button';

export const Dish = ({dish}) => {
	const {isAuth} = use(AuthContext);

	const router = useRouter();

	const {id, name, price, ingredients} = dish;

	const searchParams = useSearchParams();
	const restaurantId = searchParams.get('restaurantId');

	return (
		<>
			<h2>{name}</h2>
			<p>
				<b>Price:</b> {price} usd
			</p>
			restaurantId: {restaurantId} <br />
			dishId: {id}
			{isAuth && <Counter id={id} restaurantId={restaurantId} />}
			<h3>Ingredients:</h3>
			<ul>
				{ingredients.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			<Button onClick={() => router.back()} style="bd">
				Go Back
			</Button>
		</>
	);
};
