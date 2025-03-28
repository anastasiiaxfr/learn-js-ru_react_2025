// import useCount from '../../../../UI/Counter/useCount';
import useCount from './useCount';

import Counter from '../../../../UI/Counter';

export default function DishCounter({id, resId}) {
	const {value, increment, decrement} = useCount(id, resId);
	return <Counter count={value} increment={increment} decrement={decrement} />;
}
