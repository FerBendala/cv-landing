import Heading from '@/components/heading';
import { useLocation } from '@/hooks/useLocation';

import { logos } from './logos';
import styles from './styles.module.scss';

const Skills = () => {
	const { t } = useLocation('translation', {
		keyPrefix: 'content.skills'
	});

	return (
		<section className={styles.skills}>
			<div className={styles.skills__container}>
				<Heading title={t('title')} description={t('description')} />

				<ul className={styles.skills__list}>
					{logos.map(({ name, icon }) => (
						<li key={name} className={styles.skills__list__item}>
							{icon}
							<span>{name}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Skills;
