import style from './styles.module.scss';

interface ButtonProps {
	text: string;
	role?: string;
	onClick?: () => void;
}

const Button = ({ text, role, onClick }: ButtonProps) => {
	return (
		<button
			type='button'
			className={style.button}
			role={role}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
