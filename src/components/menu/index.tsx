import MediaQuery from 'react-responsive';

import IconMoon from '@image/svg/icon-moon.svg?react';
import IconSun from '@image/svg/icon-sun.svg?react';
import LogoFerBendala from '@image/svg/logo-ferbendala-color.svg?react';

import Button from '@/components/button';
import ButtonIcon from '@/components/button-icon';
import MenuMobile from '@/components/menu-mobile';
import SelectLanguage from '@/components/select-language';
import customLinks from '@/content/links';
import { useLocation } from '@/hooks/useLocation';
import { media } from '@/stores/mediaqueries';
import { useThemeStore } from '@/stores/theme.store';

import styles from './style.module.scss';

const Menu = () => {
	const { t } = useLocation('translation', { keyPrefix: 'components.menu' });
	const { theme, setTheme } = useThemeStore();

	return (
		<nav className={styles.menu}>
			<div className={styles.menu__container} aria-label={t('main_navigation')}>
				<a href='#' className={styles.menu__logo} aria-label={t('homepage')}>
					<LogoFerBendala />
				</a>

				<MediaQuery minWidth={media.tablet}>
					<ul className={styles.menu__list}>
						{customLinks.map(({ name, url }) => (
							<li key={name} className={styles.menu__list__item}>
								<a href={url} target='_self' className={styles.item__link}>
									{t(name.toLowerCase())}
								</a>
							</li>
						))}

						<li className={styles.menu__list__item}>
							<SelectLanguage />
							<ButtonIcon
								icon={theme === 'dark' ? <IconMoon /> : <IconSun />}
								onClick={() => setTheme(true)}
								aria-label={theme === 'dark' ? t('switch_to_light_theme') : t('switch_to_dark_theme')}
							/>
							<Button
								text={t('download_cv')}
								onClick={() => window.open('Fernando_Bendala-cv-en.pdf', '_blank')}
								aria-label={t('download_cv')}
							/>
						</li>
					</ul>
				</MediaQuery>
				<MediaQuery maxWidth={media.tablet - 1}>
					<MenuMobile />
				</MediaQuery>
			</div>
		</nav>
	);
};

export default Menu;
