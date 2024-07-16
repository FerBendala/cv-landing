import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Accordion from '@/components/accordion';
import Heading from '@/components/heading';
import { useLocation } from '@/hooks/useLocation';
import { media } from '@/stores/mediaqueries';

import { companies } from './companies';
import styles from './styles.module.scss';

const About = () => {
	const { t } = useLocation('translation', { keyPrefix: 'content.about' });
	const isTablet = useMediaQuery({
		query: `(max-width: ${media.tablet - 1}px)`
	});

	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (index: number | null) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className={styles.about}>
			<div className={styles.about__container}>
				<Heading title={t('title')} description={t('description')} />
				{companies.map(({ Icon, title, duration, company, text }, index) => (
					<article key={index} className={styles.about__article}>
						<Icon className={styles.about__article__image} />
						<section className={styles.about__article__description}>
							<h3 className={styles.description__title}>{t(title)}</h3>
							<p className={styles.description__info}>
								<span className={styles.description__info__duration}>
									{isTablet ? t(duration).split('-')[0] : t(duration)}
								</span>
								<span className={styles.description__info__company}>{t(company)}</span>
							</p>
							<Accordion
								text={t(text)}
								isOpen={openIndex === index}
								onToggle={() => handleToggle(index)}
								color={800}
							/>
						</section>
					</article>
				))}
			</div>
		</section>
	);
};

export default About;
