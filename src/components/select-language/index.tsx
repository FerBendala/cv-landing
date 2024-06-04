import { useState } from 'react';

import { s } from 'node_modules/vite/dist/node/types.d-aGj9QkWt';

import IconLocation from '@image/svg/icon-location.svg?react';

import ButtonIcon from '@/components/button-icon';
import { useLocation } from '@/hooks/useLocation';

import styles from './styles.module.scss';

interface SelectLangProps {}

const SelectLang = ({}: SelectLangProps) => {
	const [visible, setVisible] = useState(false);

	const { t, setLanguage } = useLocation('translation', {
		keyPrefix: 'language_selector'
	});

	const changeLanguage = (language: string) => {
		setLanguage(language);
	};

	return (
		<div className={styles.dropdown}>
			<ButtonIcon
				icon={<IconLocation />}
				onClick={() => setVisible(true)}
			/>
			<ul
				className={[
					styles['dropdown__list'],
					visible && styles.visible
				].join(' ')}
			>
				<li className={styles['dropdown__list__item']}>
					<button
						onClick={() => changeLanguage('en')}
						className={styles['item__button']}
					>
						{t('english')}
					</button>
				</li>
				<li className={styles['dropdown__list__item']}>
					<button
						onClick={() => changeLanguage('es')}
						className={styles['item__button']}
					>
						{t('spanish')}
					</button>
				</li>
			</ul>
		</div>
	);
};

export default SelectLang;
