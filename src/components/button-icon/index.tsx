import { JSX } from 'react';

import style from './styles.module.scss';

interface ButtonProps {
	icon: JSX.Element;
	role?: string;
	onClick?: () => void;
}

const ButtonIcon = ({ icon, role, onClick, ...rest }: ButtonProps) => {
	return (
		<button
			type='button'
			className={style.button}
			role={role}
			onClick={onClick}
			{...rest}
		>
			{icon}
		</button>
	);
};

export default ButtonIcon;
