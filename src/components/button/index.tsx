import style from './styles.module.scss';

interface ButtonProps {
	content: JSX.Element | string;
	transparent?: boolean;
}

const Button = ({ content, transparent }: ButtonProps) => {
	return (
		<button
			type='button'
			className={[
				style.button,
				transparent && style['button--transparent']
			].join(' ')}
		>
			{content}
		</button>
	);
};

export default Button;
