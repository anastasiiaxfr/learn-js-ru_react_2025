import Layout from './components/Layout/Layout';
import RestaurauntPage from './components/Pages/RestaurantPage';
import ThemeProvider from './components/Context/ThemeContext';

function App({data}) {
	return (
		<ThemeProvider>
			<Layout>
				<RestaurauntPage data={data} />
			</Layout>
		</ThemeProvider>
	);
}

export default App;
