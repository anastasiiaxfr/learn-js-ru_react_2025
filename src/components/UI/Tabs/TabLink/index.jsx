import Link from 'next/link';
import s from '../styles.module.sass';

function NavTab({item}) {
	const {slug, title} = item;
	return (
		<Link href={slug} className={s.tag}>
			{title}
		</Link>
	);
}

export default NavTab;
