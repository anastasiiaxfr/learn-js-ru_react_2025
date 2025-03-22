import {useEffect, useRef} from 'react';
import s from './styles.module.sass';

export default function Modal({children, setShowModal}) {
	const modalRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = event => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				setShowModal(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [setShowModal]);

	return (
		<section className={s.modal}>
			<div className={s.modal_content} ref={modalRef}>
				{children}
			</div>
		</section>
	);
}
