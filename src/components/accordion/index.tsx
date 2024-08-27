import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import classNames from 'classnames';

import IconArrow from '@image/svg/icon-arrow.svg?react';

import { useLocation } from '@/hooks/useLocation';
import { media } from '@/stores/mediaqueries';

import styles from './styles.module.scss';

interface AccordionProps {
	text: string;
	isOpen: boolean;
	color: 700 | 800;
	onToggle: () => void;
}

const Accordion = ({ text, isOpen, onToggle, color }: AccordionProps) => {
	const { t } = useLocation('translation', { keyPrefix: 'components.accordion' });
	const [height, setHeight] = useState(0);
	const contentRef = useRef<HTMLDivElement>(null); // Cambiado a div per a múltiples p
	const isTablet = useMediaQuery({ query: `(max-width: ${media.tablet - 1}px)` });

	useEffect(() => {
		if (isTablet && contentRef.current) {
			if (isOpen) setHeight(contentRef.current.scrollHeight);
			else setHeight(80);
		}
	}, [isTablet, isOpen, text]);

	return (
		<div className={styles.accordion}>
			<div
				className={classNames(styles.accordion__text, { [styles['accordion__text--open']]: isOpen })}
				style={isTablet ? { maxHeight: height } : undefined}
			>
				<p ref={contentRef}>{text}</p>
				{isTablet && (
					<div className={classNames(styles['accordion__text--overlay'], styles[`_${color}`])}></div>
				)}
			</div>
			{isTablet && (
				<button className={classNames(styles.accordion__button, { [styles.open]: isOpen })} onClick={onToggle}>
					{isOpen ? t('view_less') : t('view_more')}
					<IconArrow />
				</button>
			)}
		</div>
	);
};

export default Accordion;
