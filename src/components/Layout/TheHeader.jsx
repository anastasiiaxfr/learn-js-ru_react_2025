import {use} from 'react';
import AuthContext from '../Context/AuthContext/constant';
import ThemeSwithcer from '../UI/ThemeSwitcher';
import AuthToggle from '../Auth/AuthToggler';
import UserAva from '../User/UserAva';

function Header() {
	const {userEmail} = use(AuthContext);
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<a href="/" className="logo">
						TheLogo
					</a>
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
