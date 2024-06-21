import { useEffect, useState } from 'react';

import IconMenu from '@image/svg/icon-burger.svg?react';
import IconCancel from '@image/svg/icon-cancel.svg?react';
import IconMoon from '@image/svg/icon-moon.svg?react';
import IconSun from '@image/svg/icon-sun.svg?react';
import LogoFerBendala from '@image/svg/logo-ferbendala-color.svg?react';

import Button from '@/components/button';
import ButtonIcon from '@/components/button-icon';
import SelectLanguage from '@/components/select-language';
import customLinks from '@/content/links';
import { useLocation } from '@/hooks/useLocation';
import { useThemeStore } from '@/stores/theme.store';

import styles from './styles.module.scss';

const MenuMobile = () => {
	const { t } = useLocation('translation', { keyPrefix: 'components.menu' });
	const { theme, setTheme } = useThemeStore();

	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (visible) document.body.style.overflow = 'hidden';
		else document.body.style.overflow = '';
	}, [visible]);

	const themeButtonText = theme === 'dark' ? t('switch_to_light_theme') : t('switch_to_dark_theme');

	return (
		<nav className={styles.menu}>
			<ButtonIcon
				icon={<IconMenu />}
				aria-label={t('change_language')}
				aria-haspopup='listbox'
				aria-expanded={visible}
				aria-controls='menu-list'
				onClick={() => setVisible(true)}
			/>
			<ul id='menu-list' className={[styles.menu__screen, visible && styles.visible].join(' ')} role='listbox'>
				{/* Header */}
				<li className={styles.menu__screen__header}>
					<LogoFerBendala />
					<ButtonIcon
						icon={<IconCancel />}
						aria-label={t('change_language')}
						aria-haspopup='listbox'
						aria-expanded={visible}
						aria-controls='menu-list'
						onClick={() => setVisible(false)}
					/>
				</li>

				{/* Page links */}
				<li className={styles.menu__screen__links}>
					<ul className={styles.links__list}>
						{customLinks.map(({ name, url }) => (
							<li key={name} className={styles.links__list__item}>
								<a
									href={url}
									target='_self'
									className={styles.item__link}
									onClick={() => setVisible(false)}
								>
									{t(name.toLowerCase())}
								</a>
							</li>
						))}
					</ul>
				</li>

				{/* Actions */}
				<li className={styles.menu__screen__actions}>
					<ul className={styles.actions__list}>
						<li className={styles.actions__list__item}>
							<SelectLanguage />
						</li>
						<li className={styles.actions__list__item}>
							<ButtonIcon
								icon={theme === 'dark' ? <IconMoon /> : <IconSun />}
								onClick={() => setTheme(true)}
								aria-label={themeButtonText}
								text={themeButtonText}
							/>
						</li>
					</ul>
				</li>

				{/* Download */}
				<li className={styles.menu__screen__download}>
					<Button
						text={t('download_cv')}
						onClick={() => console.log(t('download_cv'))}
						aria-label={t('download_cv')}
					/>
				</li>
			</ul>
		</nav>
	);
};

export default MenuMobile;
