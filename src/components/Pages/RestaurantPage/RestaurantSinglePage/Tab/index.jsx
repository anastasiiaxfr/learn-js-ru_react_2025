import classNames from 'classnames';

import {NavLink} from 'react-router';
import s from '../../../../UI/Tabs/styles.module.sass';

function RestaurauntSingleTags({item}) {
	const {slug, title} = item;
	return (
		<NavLink
			to={slug}
			className={({isActive}) => classNames(isActive ? s.isActive : '', s.tag)}
		>
			{title}
		</NavLink>
	);
}

export default RestaurauntSingleTags;
