import style from './styles.module.scss';

interface ButtonProps {
	content: JSX.Element | string;
}

const Button = ({ content }: ButtonProps) => {
	return (
		<button type='button' className={style.button}>
			{content}
		</button>
	);
};

export default Button;
