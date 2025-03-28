import {useSelector} from 'react-redux';

import {selectTotalSum} from '../../../../../redux/entities/cart/slice';

function TotalSum() {
	const totalSum = useSelector(selectTotalSum);
	return (
		<p>
			<b>Total:</b> {totalSum} usd
		</p>
	);
}

export default TotalSum;
