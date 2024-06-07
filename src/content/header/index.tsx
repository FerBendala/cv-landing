import IconStatus from '@image/svg/icon-available.svg?react';
import IconGithub from '@image/svg/icon-github.svg?react';
import IconLinkedin from '@image/svg/icon-linkedin.svg?react';
import IconWorld from '@image/svg/icon-world.svg?react';
import photoDesktop from '@image/webp/photo-desktop.webp';
import photoMobile from '@image/webp/photo-mobile.webp';

import { useLocation } from '@/hooks/useLocation';

import styles from './styles.module.scss';

const Header = () => {
	const { t } = useLocation('translation', { keyPrefix: 'content.header' });

	const links = {
		linkedin: 'https://www.linkedin.com/in/ferbendala/',
		github: 'https://github.com/FerBendala'
	};

	return (
		<header className={styles.header}>
			<section>
				<section className={styles.header__container}>
					<h1 className={styles.header__title}>{t('title')}</h1>
					<p className={styles.header__text}>{t('text')}</p>
				</section>

				<section className={styles.header__container}>
					<p className={styles.header__info}>
						<IconWorld />
						{t('country')}
					</p>
					<p className={styles.header__info}>
						<IconStatus />
						{t('status')}
					</p>
				</section>

				<section className={styles.header__container}>
					<a
						href={links.linkedin}
						target='_blank'
						className={styles.header__link}
					>
						<IconLinkedin />
					</a>
					<a
						href={links.github}
						target='_blank'
						className={styles.header__link}
					>
						<IconGithub />
					</a>
				</section>
			</section>
			<img
				src={photoDesktop}
				srcSet={photoMobile}
				alt='Fernando Bendala'
			/>
		</header>
	);
};

export default Header;
