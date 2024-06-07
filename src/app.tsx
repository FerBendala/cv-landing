import Menu from '@/components/menu';
import Header from '@/content/header';
import { useThemeStore } from '@/stores/theme.store';

import styles from './app.module.scss';

const App = () => {
	const { theme } = useThemeStore();

	return (
		<div className={[styles.app, theme].join(' ')}>
			<Menu />
			<Header />
		</div>
	);
};

export default App;
