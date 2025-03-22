import {useState, useMemo} from 'react';

import Counter from '../../../../UI/Counter';

export default function DishCounter({id}) {
	const orders = useMemo(() => {
		return {[id]: 0};
	}, [id]);

	const [order, setOrder] = useState(orders);

	const increment = () => {
		setOrder(prevOrder => ({
			...prevOrder,
			[id]: prevOrder[id] + 1
		}));
	};

	const decrement = () => {
		setOrder(prevOrder => ({
			...prevOrder,
			[id]: prevOrder[id] - 1
		}));
	};

	return (
		<Counter
			count={order[id]}
			increment={increment}
			decrement={decrement}
		/>
	);
}
