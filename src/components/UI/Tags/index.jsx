import React from 'react';
import s from './styles.module.sass';
import classNames from 'classnames';

function Tags({data, setCurrentTab, selected}) {
	return (
		<nav className={s.tags}>
			{data.map(tag => (
				<button
					className={classNames(s.tag, {
						[s.active]: tag.name === selected.name
					})}
					key={tag.id}
					onClick={() => setCurrentTab(tag)}
				>
					{tag.name}
				</button>
			))}
		</nav>
	);
}

export default Tags;
