import Head from '@/components/head/head';
import Menu from '@/components/menu';
import About from '@/content/about';
import Contact from '@/content/contact';
import Footer from '@/content/footer';
import Header from '@/content/header';
import Skills from '@/content/skills';
import Work from '@/content/work';
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
			<About />
			<Work />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
