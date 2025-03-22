import classNames from 'classnames';
import s from './styles.module.sass';

export default function Button({
	type = 'button',
	style = 'bg',
	children,
	url = '#',
	onClick,
	disabled,
	isActive = true
}) {
	return (
		<>
			{type === 'link' ? (
				<a
					href={url}
					role="button"
					title="button"
					className={classNames(s.btn, s[`btn_${style}`], {
						[s.active]: isActive
					})}
				>
					{children}
				</a>
			) : (
				<button
					onClick={onClick}
					disabled={disabled}
					className={classNames(s.btn, s[`btn_${style}`], {
						[s.notActive]: !isActive
					})}
				>
					{children}
				</button>
			)}
		</>
	);
}
