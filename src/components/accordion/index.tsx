import { useMediaQuery } from 'react-responsive';

import classNames from 'classnames';

import IconArrow from '@image/svg/icon-arrow.svg?react';

import { useLocation } from '@/hooks/useLocation';
import { media } from '@/stores/mediaqueries';

import styles from './styles.module.scss';

interface AccordionProps {
	text: string;
	isOpen: boolean;
	onToggle: () => void;
}

const Accordion = ({ text, isOpen, onToggle }: AccordionProps) => {
	const { t } = useLocation('translation', {
		keyPrefix: 'content.about'
	});
	const isTablet = useMediaQuery({
		query: `(max-width: ${media.tablet - 1}px)`
	});

	return (
		<div className={styles.accordion}>
			<p className={classNames(styles.accordion__text, isOpen && styles.open)}>{text}</p>
			{isTablet && (
				<button className={classNames(styles.accordion__button, isOpen && styles.open)} onClick={onToggle}>
					{isOpen ? t('view_less') : t('view_more')}
					<IconArrow />
				</button>
			)}
		</div>
	);
};

export default Accordion;
