import IconGmail from '@image/svg/button-icon-gmail.svg?react';
import IconPhone from '@image/svg/button-icon-phone.svg?react';

import Button from '@/components/button';
import ButtonTextIcon from '@/components/button-text-icon';
import Heading from '@/components/heading';
import { useLocation } from '@/hooks/useLocation';
import personalInfo from '@/location/generic';

import styles from './styles.module.scss';

const Contact = () => {
	const form = [
		{
			label: 'Name',
			placeholder: 'Enter your name'
		},
		{
			label: 'Email',
			placeholder: 'Enter your email'
		},
		{
			label: 'Phone',
			placeholder: 'Enter your phone'
		},
		{
			label: 'Company',
			placeholder: 'Enter your company'
		},
		{
			label: 'Subject',
			placeholder: 'Enter your subject'
		},
		{
			label: 'Message',
			placeholder: 'Enter your message'
		}
	];
	const { t } = useLocation('translation', { keyPrefix: 'content.contact' });

	const handleSubmit = (event: any) => {
		console.log(event);
	};

	return (
		<section className={styles['contact']}>
			<div className={styles.contact__container}>
				<Heading title={t('title')} description={t('description')} />

				<section className={styles.contact__form__container}>
					<div className={styles.contact__form__buttons}>
						<ButtonTextIcon text={personalInfo.email} icon={<IconGmail />} />
						<ButtonTextIcon text={personalInfo.phone} icon={<IconPhone />} />
					</div>

					<form
						className={styles.contact__form}
						onSubmit={(event) => {
							handleSubmit(event);
						}}
					>
						{form.map(({ label }, index) => (
							<label key={index} htmlFor={label} className={styles.contact__form__label}>
								<span className={styles.label__text}>{t(label.toLowerCase())}</span>
								{index !== form.length - 1 ? (
									<input type='text' id={label} name={label} className={styles.label__input} />
								) : (
									<textarea
										typeof='text'
										id={label}
										name={label}
										className={styles.label__textarea}
									/>
								)}
							</label>
						))}

						<Button text={t('send')} type='submit' classname={styles.contact__form__button} />
					</form>
				</section>
			</div>
		</section>
	);
};

export default Contact;
