import styles from './styles.module.scss';

interface HeadingProps {
	title: string;
	description: string;
}

const Heading = ({ title, description }: HeadingProps) => {
	return (
		<header className={styles.heading}>
			<h1 className={styles.heading__title}>{title}</h1>
			<p className={styles.heading__description}>{description}</p>
		</header>
	);
};

export default Heading;
