import IconStatus from '@image/svg/icon-available.svg?react';
import IconGithub from '@image/svg/icon-github.svg?react';
import IconLinkedin from '@image/svg/icon-linkedin.svg?react';
import IconWorld from '@image/svg/icon-world.svg?react';
import photoPastGen from '@image/webp/photo.png';
import photoNextGen from '@image/webp/photo.webp';

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
			<section
				className={[
					styles.header__container,
					styles['header__container--description']
				].join(' ')}
			>
				<h1 className={styles.header__title}>{t('title')}</h1>
				<p className={styles.header__text}>{t('text')}</p>
			</section>

			<section
				className={[
					styles.header__container,
					styles['header__container--location']
				].join(' ')}
			>
				<p className={styles.header__info}>
					<IconWorld />
					{t('country')}
				</p>
				<p className={styles.header__info}>
					<IconStatus />
					{t('status')}
				</p>
			</section>

			<section
				className={[
					styles.header__container,
					styles['header__container--links']
				].join(' ')}
			>
				<a
					href={links.linkedin}
					target='_blank'
					aria-label='Linkedin'
					className={styles.header__link}
				>
					<IconLinkedin />
				</a>
				<a
					href={links.github}
					target='_blank'
					aria-label='Github'
					className={styles.header__link}
				>
					<IconGithub />
				</a>
			</section>

			<picture className={styles['header__container--image']}>
				<source srcSet={photoNextGen} />
				<source srcSet={photoPastGen} />
				<img
					src={photoNextGen}
					alt='Fernando Bendala'
					width='304'
					height='364'
					loading='lazy'
				/>
			</picture>
		</header>
	);
};

export default Header;
