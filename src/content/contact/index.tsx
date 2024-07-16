import { useForm } from 'react-hook-form';

import { s } from 'node_modules/vite/dist/node/types.d-aGj9QkWt';

import Button from '@/components/button';
import Heading from '@/components/heading';
import { useLocation } from '@/hooks/useLocation';

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

				<div className={styles.contact__form__container}>
					<div className={styles.contact__form__buttons}>
						<Button text={t('button')} />
						<Button text={t('button')} />
					</div>

					<form
						className={styles.contact__form}
						onSubmit={(event) => {
							handleSubmit(event);
						}}
					>
						{form.map(({ label }, index) => (
							<label key={index} htmlFor={label} className={styles.contact__form__label}>
								<span className={styles.label__text}>{t(label)}</span>
								<input type='text' id={label} name={label} className={styles.label__input} />
							</label>
						))}

						<input type='button' value='Submit' />
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
