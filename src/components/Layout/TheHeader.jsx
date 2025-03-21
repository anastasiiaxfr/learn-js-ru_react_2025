import ThemeSwithcer from '../UI/ThemeSwitcher';

function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<a href="/" className="logo">
						TheLogo
					</a>
					<ThemeSwithcer />
				</div>
			</div>
		</header>
	);
}

export default Header;
