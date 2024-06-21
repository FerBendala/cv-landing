import { useEffect, useRef, useState } from 'react';

import FlagCat from '@image/svg/flag-cat.svg';
import FlagSpa from '@image/svg/flag-spa.svg';
import FlagUsa from '@image/svg/flag-usa.svg';
import IconLocation from '@image/svg/icon-location.svg?react';

import ButtonIcon from '@/components/button-icon';
import { useLocation } from '@/hooks/useLocation';

import styles from './styles.module.scss';

interface SelectLangProps {}

const SelectLanguage = ({}: SelectLangProps) => {
	const { t, setLanguage } = useLocation('translation', {
		keyPrefix: 'components.language_selector'
	});

	const dropdownRef = useRef<HTMLDivElement>(null);
	const languages = [
		{ code: 'en', label: t('english'), flag: FlagUsa },
		{ code: 'es', label: t('spanish'), flag: FlagSpa },
		{ code: 'ca', label: t('catalan'), flag: FlagCat }
	];

	const [visible, setVisible] = useState(false);
	const random = Math.floor(Math.random() * languages.length);

	const handleClick = (language: string) => {
		setLanguage(language);
		setVisible(false);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
			setVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<nav className={styles.dropdown} ref={dropdownRef} aria-label={t('language_selector')}>
			<ButtonIcon
				icon={<IconLocation />}
				aria-label={t('change_language')}
				aria-haspopup='listbox'
				aria-expanded={visible}
				aria-controls={`language-list-${random}`}
				onClick={() => setVisible((prev) => !prev)}
				text={t('change_language')}
			/>
			<ul
				id={`language-list-${random}`}
				className={[styles['dropdown__list'], visible && styles.visible].join(' ')}
				role='listbox'
			>
				{languages.map(({ label, code, flag }) => (
					<li key={code} className={styles['dropdown__list__item']} role='option' aria-selected='false'>
						<button onClick={() => handleClick(code)} className={styles['item__button']}>
							<img src={flag} alt={label} />
							{label}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default SelectLanguage;
