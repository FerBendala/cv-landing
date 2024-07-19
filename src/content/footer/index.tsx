import IconCopyright from '@image/svg/icon-copyright.svg?react';

import { useLocation } from '@/hooks/useLocation';

import styles from './styles.module.scss';

const Footer = () => {
	const { t } = useLocation('translation', { keyPrefix: 'content.footer' });

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<IconCopyright />
				<p className={styles.footer__text}>{t('text')}</p>
			</div>
		</footer>
	);
};

export default Footer;
