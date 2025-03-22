import ThemeSwithcer from '../UI/ThemeSwitcher';
import AuthToggle from '../Auth/AuthToggler';

function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<a href="/" className="logo">
						TheLogo
					</a>
					<div className="btns">
						<ThemeSwithcer />
						<AuthToggle />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
