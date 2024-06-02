import Button from '@/components/button';
import useLocation from '@/hooks/useLocation';

import IconLocation from '../../assets/image/svg/icon-location.svg?react';
import IconMoon from '../../assets/image/svg/icon-moon.svg?react';
import IconSun from '../../assets/image/svg/icon-sun.svg?react';
import LogoFerBendala from '../../assets/image/svg/logo-ferbendala-color.svg?react';

const menuLinks = [
	{ name: 'Skills', url: '#' },
	{ name: 'About', url: '#' },
	{ name: 'Work', url: '#' },
	{ name: 'Contact', url: '#' }
];

const Menu = () => {
	const { t } = useLocation('translation', { keyPrefix: 'menu' });

	return (
		<nav>
			<a href='#' target='_self'>
				<LogoFerBendala />
			</a>
			<ul>
				{/* Page links */}
				{menuLinks.map(({ name, url }) => (
					<li key={name}>
						<a href={url} target='_self'>
							{name}
						</a>
					</li>
				))}

				{/* Action buttons */}
				<li>
					<Button content={<IconLocation />} />
					<Button content={true ? <IconMoon /> : <IconSun />} />
					<Button content={t('download_cv')} />
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
