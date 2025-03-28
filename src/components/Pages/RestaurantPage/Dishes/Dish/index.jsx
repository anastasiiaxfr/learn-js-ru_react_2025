import {use} from 'react';
import {useSelector} from 'react-redux';
import AuthContext from '../../../../Context/AuthContext/constant';
import {selectDishById} from '../../../../../redux/entities/dishes/slice';
import Counter from '../Counter';

function Dish({id, resId}) {
	const {isAuth} = use(AuthContext);
	const {name, price} = useSelector((state) => selectDishById(state, id));

	return (
		<li>
			<span>
				{name}: <b>{price} usd</b>
			</span>
			{isAuth && <Counter id={id} resId={resId} />}
		</li>
	);
}

export default Dish;
