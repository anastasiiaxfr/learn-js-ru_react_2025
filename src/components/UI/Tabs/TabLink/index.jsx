import classNames from 'classnames';

import {NavLink} from 'react-router';
import s from '../styles.module.sass';

function NavTab({item}) {
	const {slug, title} = item;
	return (
		<NavLink
			to={slug}
			className={({isActive}) => classNames(s.tag, {[s.isActive]: isActive})}
		>
			{title}
		</NavLink>
	);
}

export default NavTab;
