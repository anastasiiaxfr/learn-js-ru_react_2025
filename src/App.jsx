import {Provider} from 'react-redux';
import {store} from './redux/store';
import Layout from './components/Layout';
import RestaurauntPage from './components/Pages/RestaurantPage';
import ThemeProvider from './components/Context/ThemeContext';
import AuthProvider from './components/Context/AuthContext';

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<AuthProvider>
					<Layout>
						<RestaurauntPage />
					</Layout>
				</AuthProvider>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
