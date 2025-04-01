// import useCount from '../../../../UI/Counter/useCount';
import useCount from './useCount';

import Counter from '../../../../UI/Counter';

export default function DishCounter({id, restaurantId}) {
	const {value, increment, decrement} = useCount(id, restaurantId);
	return <Counter count={value} increment={increment} decrement={decrement} />;
}
