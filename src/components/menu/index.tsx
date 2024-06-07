import IconMoon from '@image/svg/icon-moon.svg?react';
import IconSun from '@image/svg/icon-sun.svg?react';
import LogoFerBendala from '@image/svg/logo-ferbendala-color.svg?react';

import Button from '@/components/button';
import ButtonIcon from '@/components/button-icon';
import SelectLanguage from '@/components/select-language';
import { useLocation } from '@/hooks/useLocation';
import { useThemeStore } from '@/stores/theme.store';

import styles from './style.module.scss';

const menuLinks = [
	{ name: 'Skills', url: '#' },
	{ name: 'About', url: '#' },
	{ name: 'Work', url: '#' },
	{ name: 'Contact', url: '#' }
];

const Menu = () => {
	const { t } = useLocation('translation', { keyPrefix: 'menu' });
	const { theme, setTheme } = useThemeStore();

	return (
		<header className={styles.menu}>
			<nav
				className={styles.menu__container}
				aria-label={t('main_navigation')}
			>
				<a
					href='#'
					className={styles.menu__logo}
					aria-label={t('homepage')}
				>
					<LogoFerBendala />
				</a>

				<ul className={styles.menu__list}>
					{/* Page links */}
					{menuLinks.map(({ name, url }) => (
						<li key={name} className={styles.menu__list__item}>
							<a
								href={url}
								target='_self'
								className={styles.item__link}
							>
								{t(name.toLowerCase())}
							</a>
						</li>
					))}

					{/* Action buttons */}
					<li className={styles.menu__list__item}>
						<SelectLanguage />
						<ButtonIcon
							icon={theme === 'dark' ? <IconMoon /> : <IconSun />}
							onClick={() => setTheme(true)}
							aria-label={
								theme === 'dark'
									? t('switch_to_light_theme')
									: t('switch_to_dark_theme')
							}
						/>
						<Button
							text={t('download_cv')}
							onClick={() => console.log(t('download_cv'))}
						/>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Menu;
