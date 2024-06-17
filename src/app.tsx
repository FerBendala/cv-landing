import Head from '@/components/head/head';
import Menu from '@/components/menu';
import Header from '@/content/header';
import Skills from '@/content/skills';
import { useThemeStore } from '@/stores/theme.store';

import styles from './app.module.scss';

const App = () => {
	const { theme } = useThemeStore();

	return (
		<div className={[styles.app, theme].join(' ')}>
			<Head />
			<Menu />
			<Header />
			<Skills />
		</div>
	);
};

export default App;
