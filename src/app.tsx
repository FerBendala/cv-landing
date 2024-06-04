import Menu from '@/components/menu';
import { useThemeStore } from '@/stores/theme.store';

import styles from './app.module.scss';

const App = () => {
	const { theme } = useThemeStore();

	return (
		<div className={[styles.app, theme].join(' ')}>
			<Menu />
		</div>
	);
};

export default App;
