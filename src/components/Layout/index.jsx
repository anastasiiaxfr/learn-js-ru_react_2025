import ThemeLayout from './ThemeDefault';
import Header from './TheHeader';
import Footer from './TheFooter';
import Cart from '@/components/Pages/RestaurantPage/Cart';

const Layout = ({children}) => {
	return (
		<ThemeLayout>
			<div className="page_wrapper">
				<main className="page">
					<Header />
					{children}
					<Cart />
				</main>
			</div>
			<Footer />
		</ThemeLayout>
	);
};

export default Layout;
