import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Accordion from '@/components/accordion';
import Heading from '@/components/heading';
import { useLocation } from '@/hooks/useLocation';
import { media } from '@/stores/mediaqueries';

import styles from './styles.module.scss';
import { works } from './works';

const Work = () => {
	const { t } = useLocation('translation', { keyPrefix: 'content.work' });
	const isTablet = useMediaQuery({
		query: `(max-width: ${media.tablet - 1}px)`
	});

	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (index: number | null) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section id='work' className={styles.about}>
			<div className={styles.about__container}>
				<Heading title={t('title')} description={t('description')} />
				<div className={styles.about__article__container}>
					{works.map(({ image, title, text, link, tech }, index) => (
						<article key={index} className={styles.about__article}>
							<a className={styles.about__article__figure} href={link} target='_blank'>
								<img
									src={image}
									alt={title}
									className={styles.figure__image}
									loading='lazy'
									width={400}
									height={216}
								/>
							</a>
							<section className={styles.about__article__description}>
								<h3 className={styles.description__title}>{t(title)}</h3>
								<Accordion
									text={t(text)}
									isOpen={openIndex === index}
									onToggle={() => handleToggle(index)}
									color={700}
								/>
								<footer className={styles.description__footer}>
									{isTablet && <div className={styles['description__footer--overlay']}></div>}
									<div className={styles.description__footer__tags}>
										{tech.split(',').map((tech, index) => (
											<span key={index} className={styles.tags__tag}>
												{tech}
											</span>
										))}
									</div>
									{isTablet && <div className={styles['description__footer--overlay']}></div>}
								</footer>
							</section>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Work;
