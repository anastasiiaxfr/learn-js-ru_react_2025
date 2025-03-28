import classNames from 'classnames';
import s from '../styles.module.sass';

function Tab({name, onClick, selected}) {
	return (
		<button
			className={classNames(s.tag, {
				[s.active]: selected,
			})}
			onClick={onClick}
		>
			{name}
		</button>
	);
}

export default Tab;
