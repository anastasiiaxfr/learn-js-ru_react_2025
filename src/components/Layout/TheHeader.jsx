import {use} from 'react';
import {NavLink} from 'react-router';
import classNames from 'classnames';

import AuthContext from '../Context/AuthContext/constant';
import ThemeSwithcer from '../UI/ThemeSwitcher';
import AuthToggle from '../Auth/AuthToggler';
import UserAva from '../User/UserAva';

const menu = [
	{title: 'Home', slug: '/'},
	{title: 'Restaurants', slug: '/restaurants'},
];

function Header() {
	const {userEmail} = use(AuthContext);

	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<a href="/" className="logo">
						TheLogo
					</a>
					<nav className="menu">
						{menu.map((link) => (
							<NavLink
								key={link.slug}
								to={link.slug}
								className={({isActive}) =>
									classNames(isActive ? 'isActive' : '')
								}
							>
								{link.title}
							</NavLink>
						))}
					</nav>
					<div className="btns">
						<UserAva userEmail={userEmail} />
						<ThemeSwithcer />
						<AuthToggle />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
