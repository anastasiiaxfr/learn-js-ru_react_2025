'use client';

import Link from 'next/link';
import s from '../../../UI/Tabs/styles.module.sass';

function RestaurauntTags({id, name}) {
	return (
		<Link href={`/restaurants/${id}`} className={s.tag}>
			{name}
		</Link>
	);
}

export default RestaurauntTags;
