import style from './styles.module.scss';

interface ButtonProps {
	text: string;
	onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
	return (
		<button type='button' className={style.button} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
