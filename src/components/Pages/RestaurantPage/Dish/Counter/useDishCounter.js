import {useState, useMemo} from 'react';

export default function useDishCounter(id) {
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

	return {
		count: order[id],
		increment,
		decrement
	};
}
