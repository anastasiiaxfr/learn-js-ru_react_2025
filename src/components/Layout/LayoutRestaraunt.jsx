import {use} from 'react';
import {Outlet} from 'react-router';
import AuthContext from '../Context/AuthContext/constant';
import ThemeContext from '../Context/ThemeContext/constant';
import Header from './TheHeader';
import Footer from './TheFooter';
import ProgressBar from '../UI/ProgressBar';
import Cart from '../Pages/RestaurantPage/Cart';
import ReviewForm from '../UI/Forms/ReviewForm';

const Layout = () => {
	const {theme} = use(ThemeContext);

	return (
		<div className={theme === 'dark' ? 'dark' : 'light'}>
			<div className="page_wrapper">
				<Header />
				<ProgressBar />
				<main className="page">
					<Outlet />
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
