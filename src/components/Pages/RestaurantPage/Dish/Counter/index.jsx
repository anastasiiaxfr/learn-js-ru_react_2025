import useDishCounter from './useDishCounter';
import Counter from '../../../../UI/Counter';

export default function DishCounter({id}) {
	const {count, increment, decrement} = useDishCounter(id);

	return (
		<Counter count={count} increment={increment} decrement={decrement} />
	);
}
