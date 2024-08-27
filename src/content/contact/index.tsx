import { FormEvent, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { init, sendForm } from '@emailjs/browser';
import IconGmail from '@image/svg/button-icon-gmail.svg?react';
import IconPhone from '@image/svg/button-icon-phone.svg?react';

import Button from '@/components/button';
import ButtonTextIcon from '@/components/button-text-icon';
import Heading from '@/components/heading';
import { useLocation } from '@/hooks/useLocation';
import personalInfo from '@/localization/generic';

import { form } from './form';
import styles from './styles.module.scss';

const EMAILJS_ID = '5SIjwpTGxwiHV7j2y';
const SERVICE_ID = 'service_zwwez14';
const TEMPLATE_ID = 'template_5squxc7';

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [disableOnCheck, setDisableOnCheck] = useState(false);
	const { t } = useLocation('translation', { keyPrefix: 'content.contact' });

	useEffect(() => init(EMAILJS_ID), []);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setDisableOnCheck(true);

		const content = event.target as HTMLFormElement;

		try {
			await sendForm(SERVICE_ID, TEMPLATE_ID, content);
			toast.success('Email sent successfully');
			formRef.current?.reset();
		} catch (error) {
			toast.error('Error sending email');
			console.error('Error sending email:', error);
		} finally {
			setDisableOnCheck(false);
		}
	};

	const handleMailTo = () => (window.location.href = 'mailto:example@example.com');
	const handleCallTo = () => (window.location.href = 'tel:+34683175969');

	return (
		<section id='contact' className={styles['contact']}>
			<div className={styles.contact__container}>
				<Heading title={t('title')} description={t('description')} />

				<section className={styles.contact__form__container}>
					<div className={styles.contact__form__buttons}>
						<ButtonTextIcon text={personalInfo.email} icon={<IconGmail />} onClick={handleMailTo} />
						<ButtonTextIcon text={personalInfo.phone} icon={<IconPhone />} onClick={handleCallTo} />
					</div>

					<form ref={formRef} className={styles.contact__form} onSubmit={handleSubmit}>
						{form.map(({ label, type, required }, index) => (
							<label key={index} htmlFor={label} className={styles.contact__form__label}>
								<span className={styles.label__text}>{t(label.toLowerCase())}</span>
								{index !== form.length - 1 ? (
									<input
										type={type}
										id={label}
										name={label}
										className={styles.label__input}
										required={required}
									/>
								) : (
									<textarea
										typeof='text'
										id={label}
										name={label}
										className={styles.label__textarea}
										required={required}
									/>
								)}
							</label>
						))}

						<Button
							text={t('send')}
							type='submit'
							classname={styles.contact__form__button}
							disabled={disableOnCheck}
						/>
					</form>
				</section>
			</div>
		</section>
	);
};

export default Contact;
