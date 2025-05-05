import Layout from '../components/Layout';
import {App} from '../components/App/app';
import '../assets/styles/sass/styles.sass';

export const metadata = {
	title: 'Next js app',
	description: 'restaurants app'
};

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" type="image/svg+xml" href="/vite.svg" />
			</head>
			<body>
				<App>
					<Layout>{children}</Layout>
				</App>
			</body>
		</html>
	);
}
