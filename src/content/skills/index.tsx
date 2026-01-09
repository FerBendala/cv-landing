import Heading from '@/components/heading';
import { useLocation } from '@/hooks/useLocation';

import { skillGroups } from './logos';
import styles from './styles.module.scss';

const Skills = () => {
	const { t } = useLocation('translation', {
		keyPrefix: 'content.skills'
	});

	return (
		<section id='skills' className={styles.skills}>
			<div className={styles.skills__container}>
				<Heading title={t('title')} description={t('description')} />

				<div className={styles.skills__groups}>
					{skillGroups.map(({ category, skills }) => (
						<div key={category} className={styles.skills__group}>
							<h3 className={styles.skills__group__title}>{t(`categories.${category}`)}</h3>
							<ul className={styles.skills__list}>
								{skills.map(({ name, icon }) => (
									<li key={name} className={styles.skills__list__item}>
										{icon}
										<span>{name}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
