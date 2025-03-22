import {use} from 'react';
import ThemeContext from '../../Context/ThemeContext/constant';
import Button from '../Button';
import IconDark from './icons/Dark.jsx';
import IconLight from './icons/Light.jsx';

export default function ThemeSwitcher() {
	const {theme, toggleTheme} = use(ThemeContext);

	return (
		<Button
			onClick={toggleTheme}
			style="squareBd"
			title={theme === 'light' ? 'day theme' : 'night theme'}
		>
			{theme === 'light' ? (
				<IconLight size="24" />
			) : (
				<IconDark size="24" />
			)}
		</Button>
	);
}
