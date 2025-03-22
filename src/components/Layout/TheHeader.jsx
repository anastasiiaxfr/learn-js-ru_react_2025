import {use} from 'react';
import AuthContext from '../Context/AuthContext/constant';
import ThemeSwithcer from '../UI/ThemeSwitcher';
import AuthToggle from '../Auth/AuthToggler';

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
						{userEmail && <b className="">{userEmail}</b>}
						<ThemeSwithcer />
						<AuthToggle />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
