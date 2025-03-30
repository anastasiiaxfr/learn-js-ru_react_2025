import {use} from 'react';
<<<<<<< HEAD
=======
import {NavLink} from 'react-router';
import classNames from 'classnames';

>>>>>>> 0300512 (hw-8)
import AuthContext from '../Context/AuthContext/constant';
import ThemeSwithcer from '../UI/ThemeSwitcher';
import AuthToggle from '../Auth/AuthToggler';
import UserAva from '../User/UserAva';

<<<<<<< HEAD
function Header() {
	const {userEmail} = use(AuthContext);
=======
const menu = [
	{title: 'Home', slug: '/'},
	{title: 'Restaurants', slug: '/restaurants'}
];

function Header() {
	const {userEmail} = use(AuthContext);

>>>>>>> 0300512 (hw-8)
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<a href="/" className="logo">
						TheLogo
					</a>
<<<<<<< HEAD
=======
					<nav className="menu">
						{menu.map(i => (
							<NavLink
								key={i.slug}
								to={i.slug}
								className={({isActive}) =>
									classNames(isActive ? 'isActive' : '')
								}
							>
								{i.title}
							</NavLink>
						))}
					</nav>
>>>>>>> 0300512 (hw-8)
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
