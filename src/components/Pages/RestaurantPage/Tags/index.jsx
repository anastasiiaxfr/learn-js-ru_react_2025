import {useSelector} from 'react-redux';
<<<<<<< HEAD
import {selectRestaurantById} from '../../../../redux/entities/restaurants/slice.js';

import Tab from '../../../UI/Tabs/Tab';

function RestaurauntTags({id, onClick, isActive}) {
	const restaurant = useSelector((state) => selectRestaurantById(state, id));

	return <Tab name={restaurant.name} onClick={onClick} selected={isActive} />;
=======
import classNames from 'classnames';

import {selectRestaurantById} from '../../../../redux/entities/restaurants/slice.js';
import {NavLink} from 'react-router';
import s from '../../../UI/Tabs/styles.module.sass';

function RestaurauntTags({id}) {
	const restaurant = useSelector(state => selectRestaurantById(state, id));

	return (
		<NavLink
			to={id}
			className={({isActive}) => classNames(isActive ? s.isActive : '', s.tag)}
		>
			{restaurant.name}
		</NavLink>
	);
>>>>>>> 0300512 (hw-8)
}

export default RestaurauntTags;
