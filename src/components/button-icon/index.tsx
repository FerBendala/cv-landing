import { JSX } from 'react';

import style from './styles.module.scss';

interface ButtonProps {
	icon: JSX.Element;
	onClick?: () => void;
}

const ButtonIcon = ({ icon, onClick }: ButtonProps) => {
	return (
		<button type='button' className={style.button} onClick={onClick}>
			{icon}
		</button>
	);
};

export default ButtonIcon;
