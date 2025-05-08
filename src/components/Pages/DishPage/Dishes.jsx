import Link from 'next/link';

export const Dishes = ({dishes, restaurantId}) => {
	return (
		<div>
			<h3>Dishes:</h3>
			{dishes.map(({id, name, price}) => (
				<li key={id}>
					<span>
						{name}: <b>{price} usd</b>
					</span>{' '}
					<Link href={`/dish/${id}?restaurantId=${restaurantId}`}>About</Link>
				</li>
			))}
		</div>
	);
};
