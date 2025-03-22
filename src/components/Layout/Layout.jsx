import {use} from 'react';

import ThemeContext from '../Context/ThemeContext/constant';
import Header from './TheHeader';
import Footer from './TheFooter';
import ProgressBar from '../UI/ProgressBar';

const Layout = ({children}) => {
	const {theme} = use(ThemeContext);

	return (
		<div className={theme === 'dark' ? 'dark' : 'light'}>
			<div className="page_wrapper">
				<Header />
				<ProgressBar />
				<main className="page">{children}</main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
