'use client';
import {useState} from 'react';
import ThemeContext from './constant';

const ThemeProvider = ({children}) => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	};

	return <ThemeContext value={{theme, toggleTheme}}>{children}</ThemeContext>;
};

export default ThemeProvider;
