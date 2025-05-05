import ThemeLayout from './ThemeDefault';
import Header from './TheHeader';
import Footer from './TheFooter';

const Layout = ({children}) => {
	return (
		<ThemeLayout>
			<div className="page_wrapper">
				<Header />
				{children}
			</div>
			<Footer />
		</ThemeLayout>
	);
};

export default Layout;
