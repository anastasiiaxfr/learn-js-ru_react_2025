import {useSelector} from 'react-redux';
import s from './styles.module.sass';
import classNames from 'classnames';

function Tags({data, onClick, selected, setData}) {
	const tagName = useSelector((state) => (tag) => {
		const {name} = setData(state, tag);
		return name;
	});

	return (
		<nav className={s.tags}>
			{data.map((tag) => (
				<button
					className={classNames(s.tag, {
						[s.active]: tag === selected,
					})}
					key={tag}
					onClick={() => onClick(tag)}
				>
					{tagName(tag)}
				</button>
			))}
		</nav>
	);
}

export default Tags;
