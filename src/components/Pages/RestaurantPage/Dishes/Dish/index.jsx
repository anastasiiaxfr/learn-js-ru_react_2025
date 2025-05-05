import Link from 'next/link';

function Dish({data}) {
	const {name, price, id} = data;

	return (
		<li>
			<span>
				{name}: <b>{price} usd</b>
			</span>{' '}
			<Link href={`/dish/${id}`}>About</Link>
		</li>
	);
}

export default Dish;
