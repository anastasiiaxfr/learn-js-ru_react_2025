import Layout from './components/Layout/Layout';
import RestaurauntPage from './components/Pages/RestaurantPage';
import ThemeProvider from './components/Context/ThemeContext';
import AuthProvider from './components/Context/AuthContext';

function App({data}) {
	return (
		<ThemeProvider>
			<AuthProvider>
				<Layout>
					<RestaurauntPage data={data} />
				</Layout>
			</AuthProvider>
		</ThemeProvider>
	);
}

export default App;
