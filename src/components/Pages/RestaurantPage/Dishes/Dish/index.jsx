<<<<<<< HEAD
import {use} from 'react';
import {useSelector} from 'react-redux';
import AuthContext from '../../../../Context/AuthContext/constant';
import {selectDishById} from '../../../../../redux/entities/dishes/slice';
import Counter from '../Counter';

function Dish({id, resId}) {
	const {isAuth} = use(AuthContext);
	const {name, price} = useSelector((state) => selectDishById(state, id));
=======
import {useSelector} from 'react-redux';
import {selectDishById} from '../../../../../redux/entities/dishes/slice';
import {Link, Outlet} from 'react-router';

function Dish({id, resId}) {
	const {name, price} = useSelector(state => selectDishById(state, id));
>>>>>>> 0300512 (hw-8)

	return (
		<li>
			<span>
				{name}: <b>{price} usd</b>
			</span>
<<<<<<< HEAD
			{isAuth && <Counter id={id} resId={resId} />}
=======
			&nbsp; &rarr; &nbsp;
			<Link to={`/dish/${id}?res=${resId}`}>Order</Link>
			<Outlet />
>>>>>>> 0300512 (hw-8)
		</li>
	);
}

export default Dish;
