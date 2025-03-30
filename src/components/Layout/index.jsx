import {use} from 'react';
<<<<<<< HEAD
=======
import {Outlet} from 'react-router';
>>>>>>> 0300512 (hw-8)

import ThemeContext from '../Context/ThemeContext/constant';
import Header from './TheHeader';
import Footer from './TheFooter';
import ProgressBar from '../UI/ProgressBar';

<<<<<<< HEAD
const Layout = ({children}) => {
=======
const Layout = () => {
>>>>>>> 0300512 (hw-8)
	const {theme} = use(ThemeContext);

	return (
		<div className={theme === 'dark' ? 'dark' : 'light'}>
			<div className="page_wrapper">
				<Header />
				<ProgressBar />
<<<<<<< HEAD
				<main className="page">{children}</main>
=======
				<main className="page">
					<Outlet />
				</main>
>>>>>>> 0300512 (hw-8)
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
