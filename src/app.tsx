import Head from '@/components/head/head';
import Menu from '@/components/menu';
import About from '@/content/about';
import Header from '@/content/header';
import Skills from '@/content/skills';
import Work from '@/content/work';
import { useThemeStore } from '@/stores/theme.store';

import styles from './app.module.scss';
import Contact from './content/contact';

const App = () => {
	const { theme } = useThemeStore();

	return (
		<div className={[styles.app, theme].join(' ')}>
			<Head />
			<Menu />
			<Header />
			<Skills />
			<About />
			<Work />
			<Contact />
		</div>
	);
};

export default App;
