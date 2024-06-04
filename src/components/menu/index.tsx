import IconLocation from '@/assets/image/svg/icon-location.svg?react';
import IconMoon from '@/assets/image/svg/icon-moon.svg?react';
import IconSun from '@/assets/image/svg/icon-sun.svg?react';
import LogoFerBendala from '@/assets/image/svg/logo-ferbendala-color.svg?react';
import Button from '@/components/button';
import useLocation from '@/hooks/useLocation';

import styles from './style.module.scss';

const menuLinks = [
	{ name: 'Skills', url: '#' },
	{ name: 'About', url: '#' },
	{ name: 'Work', url: '#' },
	{ name: 'Contact', url: '#' }
];

const Menu = () => {
	const { t } = useLocation('translation', { keyPrefix: 'menu' });

	return (
		<header className={styles.menu}>
			<nav className={styles.menu__container}>
				<a href='#' target='_self' className={styles.menu__logo}>
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
								{name}
							</a>
						</li>
					))}

					{/* Action buttons */}
					<li className={styles.menu__list__item}>
						<Button content={<IconLocation />} transparent />
						<Button
							content={true ? <IconMoon /> : <IconSun />}
							transparent
						/>
						<Button content={t('download_cv')} />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Menu;
