import {useSelector} from 'react-redux';
import {selectRestaurantById} from '../../../../redux/entities/restaurants/slice.js';

import Tab from '../../../UI/Tabs/Tab';

function RestaurauntTags({id, onClick, isActive}) {
	const restaurant = useSelector((state) => selectRestaurantById(state, id));

	return <Tab name={restaurant.name} onClick={onClick} selected={isActive} />;
}

export default RestaurauntTags;
