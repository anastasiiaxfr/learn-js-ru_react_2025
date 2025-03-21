import {useProgress} from './useProgress';
import s from './styles.module.sass';

const ProgressBar = () => {
	const scrollSize = useProgress();

	return (
		<div className={s.progress_bar}>
			<div className={s.progress_thumb} style={{width: `${scrollSize}%`}} />
		</div>
	);
};

export default ProgressBar;
