import logoFerBendala from '../../assets/image/svg/logo-ferbendala-color.svg';
import iconLocation from '../../assets/image/svg/icon-location.svg';
import iconMoon from '../../assets/image/svg/icon-moon.svg';
import iconSun from '../../assets/image/svg/icon-sun.svg';

const menuLinks = [
	{ name: 'Skills', url: '#' },
	{ name: "About", url: '#' },
	{ name: "Work", url: '#' },
	{ name: "Contact", url: '#' },
]

const Menu = () => {

	return (
		<nav>
			<a href="#" target="_self">
				<img src={logoFerBendala} alt="Fernando Bendala" />
			</a>
			<ul>
				{menuLinks.map(({ name, url }) => (
					<li key={name}>
						<a href={url}>{name}</a>
					</li>
				))}
				<li>
					<button>
						<img src={iconLocation} alt="location" />
					</button>
					<button>
						<img src={true ? iconMoon : iconSun} alt="theme toggle" />
					</button>
					<button>Download CV</button>
				</li>
			</ul>
		</nav>
	)
};

export default Menu;