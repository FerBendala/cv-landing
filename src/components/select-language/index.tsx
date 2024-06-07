import { useEffect, useRef, useState } from 'react';

import IconLocation from '@image/svg/icon-location.svg?react';

import ButtonIcon from '@/components/button-icon';
import { useLocation } from '@/hooks/useLocation';

import styles from './styles.module.scss';

interface SelectLangProps {}

const SelectLanguage = ({}: SelectLangProps) => {
	const { t, setLanguage } = useLocation('translation', {
		keyPrefix: 'language_selector'
	});

	const dropdownRef = useRef<HTMLDivElement>(null);
	const languages = [
		{ code: 'en', label: t('english') },
		{ code: 'es', label: t('spanish') },
		{ code: 'ca', label: t('catalan') }
	];

	const [visible, setVisible] = useState(false);

	const handleClick = (language: string) => {
		setLanguage(language);
		setVisible(false);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
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
		<nav
			className={styles.dropdown}
			ref={dropdownRef}
			aria-label={t('language_selector')}
		>
			<ButtonIcon
				icon={<IconLocation />}
				aria-haspopup='listbox'
				aria-expanded={visible}
				aria-controls='language-list'
				onClick={() => setVisible(true)}
			/>
			<ul
				id='language-list'
				className={[
					styles['dropdown__list'],
					visible && styles.visible
				].join(' ')}
				role='listbox'
			>
				{languages.map((language) => (
					<li
						key={language.code}
						className={styles['dropdown__list__item']}
						role='option'
						aria-selected='false'
					>
						<button
							onClick={() => handleClick(language.code)}
							className={styles['item__button']}
						>
							{language.label}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default SelectLanguage;
