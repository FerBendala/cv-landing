import classNames from 'classnames';

import style from './styles.module.scss';

interface ButtonProps {
	text: string;
	type?: 'button' | 'submit' | 'reset';
	classname?: string;
	onClick?: () => void;
}

const Button = ({ text, type = 'button', classname, onClick, ...data }: ButtonProps) => {
	return (
		<button type={type} className={classNames(style.button, classname && classname)} onClick={onClick} {...data}>
			{text}
		</button>
	);
};

export default Button;
