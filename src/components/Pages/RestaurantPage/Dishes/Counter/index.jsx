import useCount from '../../../../UI/Counter/useCount';
import Counter from '../../../../UI/Counter';

export default function DishCounter() {
	const {count, increment, decrement} = useCount();

	return <Counter count={count} increment={increment} decrement={decrement} />;
}
