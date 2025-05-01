'use client';

import Link from 'next/link';
import Tabs from '../../../UI/Tabs/index.jsx';
import s from '../../../UI/Tabs/styles.module.sass';

export const RestaurantsTabs = ({restaurants}) => {
	return (
		<Tabs>
			{restaurants.map(({name, id}) => (
				<Link href={`/restaurants/${id}`} key={id} className={s.tag}>
					{name}
				</Link>
			))}
		</Tabs>
	);
};
