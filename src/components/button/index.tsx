import style from './styles.module.scss';

interface ButtonProps {
	text: string;
	onClick?: () => void;
}

const Button = ({ text, onClick, ...data }: ButtonProps) => {
	return (
		<button type='button' className={style.button} onClick={onClick} {...data}>
			{text}
		</button>
	);
};

export default Button;
