import classNames from 'classnames';

import {NavLink} from 'react-router';
import s from '../../../UI/Tabs/styles.module.sass';

function RestaurauntTags({id, name}) {
	return (
		<NavLink
			to={id}
			className={({isActive}) => classNames(isActive ? s.isActive : '', s.tag)}
		>
			{name}
		</NavLink>
	);
}

export default RestaurauntTags;
