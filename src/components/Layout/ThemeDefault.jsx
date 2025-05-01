'use client';

import {use} from 'react';
import ThemeContext from '../Context/ThemeContext/constant';
import ProgressBar from '../UI/ProgressBar';

export default function ThemeLayout({children}) {
	const {theme} = use(ThemeContext);

	return (
		<div className={theme === 'dark' ? 'dark' : 'light'}>
			<ProgressBar />
			{children}
		</div>
	);
}
