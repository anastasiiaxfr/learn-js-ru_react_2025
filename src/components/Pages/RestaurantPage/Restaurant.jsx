'use client';

import Tabs from '@/components/UI/Tabs/index.jsx';
import Link from 'next/link';
import s from '@/components/UI/Tabs/styles.module.sass';

const Restaurant = ({name, description, id}) => {
	return (
		<section>
			<h2>{name}</h2>
			<p>{description}</p>
			<Tabs>
				<Link href={`/restaurants/${id}/menu`} className={s.tag}>
					Menu
				</Link>
				<Link href={`/restaurants/${id}/review`} className={s.tag}>
					Review
				</Link>
			</Tabs>
		</section>
	);
};

export default Restaurant;
