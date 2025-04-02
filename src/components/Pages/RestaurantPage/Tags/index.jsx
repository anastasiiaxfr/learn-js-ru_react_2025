import {useSelector} from 'react-redux';
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
}

export default RestaurauntTags;
