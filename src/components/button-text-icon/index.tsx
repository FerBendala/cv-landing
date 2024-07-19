import { JSX } from 'react';

import style from './styles.module.scss';

interface ButtonProps {
	icon: JSX.Element;
	text: string;
	onClick?: () => void;
}

const ButtonTextIcon = ({ icon, text, onClick, ...data }: ButtonProps) => {
	return (
		<button type='button' className={style.button} onClick={onClick} {...data}>
			{icon}
			{text}
		</button>
	);
};

export default ButtonTextIcon;
