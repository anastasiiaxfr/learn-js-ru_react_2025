import s from './styles.module.sass';

function Tabs({children}) {
	return <nav className={s.tags}>{children}</nav>;
}

export default Tabs;
