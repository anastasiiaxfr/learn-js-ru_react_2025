import classNames from 'classnames';
import s from './styles.module.sass';

export default function Button({
	type = 'button',
	style = 'bg',
	children,
	url = '#',
	onClick,
	disabled
}) {
	return (
		<>
			{type === 'link' ? (
				<a
					href={url}
					role="button"
					title="button"
					className={classNames(s.btn, s[`btn_${style}`])}
				>
					{children}
				</a>
			) : (
				<button
					onClick={onClick}
					disabled={disabled}
					className={classNames(s.btn, s[`btn_${style}`])}
				>
					{children}
				</button>
			)}
		</>
	);
}
