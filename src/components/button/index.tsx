import classNames from 'classnames';

import style from './styles.module.scss';

interface ButtonProps {
	text: string;
	type?: 'button' | 'submit' | 'reset';
	classname?: string;
	disabled?: boolean;
	onClick?: () => void;
}

const Button = ({ text, type = 'button', classname, onClick, disabled, ...data }: ButtonProps) => {
	return (
		<button
			type={type}
			className={classNames(style.button, classname && classname)}
			onClick={onClick}
			disabled={disabled}
			{...data}
		>
			{text}
		</button>
	);
};

export default Button;
