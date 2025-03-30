import {Provider} from 'react-redux';
<<<<<<< HEAD
import {store} from './redux/store';
import Layout from './components/Layout';
import RestaurauntPage from './components/Pages/RestaurantPage';
=======
import {BrowserRouter, Navigate, Route, Routes} from 'react-router';
import {store} from './redux/store';
import Layout from './components/Layout';
import LayoutRestaurant from './components/Layout/LayoutRestaraunt';

import RestaurauntPage from './components/Pages/RestaurantPage';
import RestarauntSinglePage from './components/Pages/RestaurantPage/RestaurantSinglePage';
import RestarauntSinglePageMenu from './components/Pages/RestaurantPage/RestaurantSinglePage/Menu';
import RestarauntSinglePageReview from './components/Pages/RestaurantPage/RestaurantSinglePage/Review';
import DishPage from './components/Pages/DishPage';
import HomePage from './components/Pages/HomePage';
>>>>>>> 0300512 (hw-8)
import ThemeProvider from './components/Context/ThemeContext';
import AuthProvider from './components/Context/AuthContext';

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<AuthProvider>
<<<<<<< HEAD
					<Layout>
						<RestaurauntPage />
					</Layout>
=======
					<BrowserRouter>
						<Routes>
							<Route element={<Layout />}>
								<Route index element={<HomePage />} />
							</Route>
							<Route element={<LayoutRestaurant />}>
								<Route path="/restaurants" element={<RestaurauntPage />}>
									<Route
										path=":restaurantId"
										element={<RestarauntSinglePage />}
									>
										<Route index element={<RestarauntSinglePageMenu />} />
										<Route
											index
											path="menu"
											element={<RestarauntSinglePageMenu />}
										/>
										<Route
											path="review"
											element={<RestarauntSinglePageReview />}
										/>
									</Route>
								</Route>
								<Route path="/dish" element={<DishPage />}>
									<Route path=":dishId" element={<DishPage />} />
								</Route>
							</Route>
							<Route path="*" element={<Navigate to="/" replace />} />
						</Routes>
					</BrowserRouter>
>>>>>>> 0300512 (hw-8)
				</AuthProvider>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
