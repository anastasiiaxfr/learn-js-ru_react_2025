'use client';
import {use} from 'react';

import AuthContext from '../Context/AuthContext/constant';
import ThemeSwithcer from '../UI/ThemeSwitcher';
import AuthToggle from '../Auth/AuthToggler';
import UserAva from '../User/UserAva';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

const menu = [
	{title: 'Home', slug: '/'},
	{title: 'Restaurants', slug: '/restaurants'},
];

function Header() {
	const {userEmail} = use(AuthContext);
	const pathname = usePathname();

	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<a href="/" className="logo">
						TheLogo
					</a>
					<nav className="menu">
						{menu.map((link) => (
							<Link
								key={link.slug}
								href={link.slug}
								className={pathname === link.slug ? 'isActive' : ''}
							>
								{link.title}
							</Link>
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
