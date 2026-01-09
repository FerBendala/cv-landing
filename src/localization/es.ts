const es = {
	translation: {
		meta: {
			title: 'Fernando Bendala',
			description: 'Sitio personal de Fernando Bendala'
		},
		components: {
			menu: {
				download_cv: 'Descargar CV',
				skills: 'Skills',
				about: 'Perfil',
				work: 'Trabajo',
				contact: 'Contacto',
				main_navigation: 'Navegación principal',
				homepage: 'Página de inicio',
				switch_to_light_theme: 'Cambiar a tema claro',
				switch_to_dark_theme: 'Cambiar a tema oscuro'
			},
			language_selector: {
				language_selector: 'Idioma',
				change_language: 'Cambiar idioma',
				english: 'Inglés',
				spanish: 'Español',
				catalan: 'Catalán'
			},
			accordion: {
				view_less: 'Ver menos',
				view_more: 'Ver más'
			}
		},
		content: {
			header: {
				title: 'Hola, soy Fer Bendala 👋',
				subtitle: 'Frontend Architect · Tech Lead · Design Systems',
				text: 'Construyo plataformas frontend que escalan entre equipos, con foco en arquitectura, sistemas de diseño, rendimiento y experiencia de desarrollo. Mi perfil se mueve entre la ingeniería y el diseño UX/UI: he liderado sistemas compartidos, lanzado productos desde cero y definido estándares que permiten entregar rápido sin perder calidad.',
				country: 'Barcelona, España',
				status: 'Disponible para nuevos proyectos'
			},
			skills: {
				title: 'Habilidades',
				description: 'Las habilidades, herramientas y tecnologías que me encantan'
			},
			about: {
				title: 'Sobre mi',
				description:
					'Aquí tienes un resumen de mi trayectoria reciente y del tipo de problemas en los que suelo aportar más valor',
				inditex: {
					title: 'Frontend Lead',
					duration: 'Actualmente - desde enero de 2025',
					company: 'Inditex (a través de Kelea)',
					text: 'Lidero la arquitectura frontend en plataformas enterprise globales, tomando decisiones estructurales y definiendo estándares compartidos entre equipos. Me mantengo implicado a nivel técnico cuando es necesario, trabajando en contextos multiequipo y asegurando que los sistemas frontend compartidos escalen correctamente en rendimiento, mantenibilidad y experiencia de desarrollo.'
				},
				fxstreet: {
					title: 'Frontend Lead',
					duration: 'De octubre de 2023 a diciembre de 2024',
					company: 'FXStreet',
					text: 'Responsable de la arquitectura y del desarrollo frontend de un producto mobile-first construido desde cero. Definí la base técnica, los criterios de calidad y la estructura de navegación, combinando buenas prácticas de arquitectura y diseño. Colaboré estrechamente con diseño, producto y QA para asegurar una entrega consistente, manteniendo el foco en rendimiento, mantenibilidad y capacidad de iteración del equipo.'
				},
				tiendeo: {
					title: 'Frontend Lead y Diseñador UX/UI de Sistemas',
					duration: 'De noviembre de 2020 a octubre de 2023',
					company: 'Tiendeo',
					text: 'Lideré el desarrollo de sistemas de diseño y arquitecturas frontend compartidas, combinando visión técnica y diseño UX/UI. Definí estándares reutilizables, flujos escalables y procesos de automatización creativa que redujeron significativamente los tiempos de producción (en torno a un 80% en casos concretos). Mi rol estuvo centrado en mejorar la colaboración entre equipos sin comprometer calidad ni velocidad de entrega.'
				},
				axpe: {
					title: 'Desarrollador Frontend y Diseñador UX/UI',
					duration: 'De julio de 2019 a octubre de 2020',
					company: 'Axpe Consulting',
					text: 'Participé en proyectos para clientes desarrollando interfaces frontend y soluciones UX/UI, trabajando de forma coordinada con diseño, producto y backend. Me enfoqué en construir interfaces mantenibles y coherentes, resolviendo problemas de UI y sentando bases técnicas sólidas adaptadas a cada contexto.'
				},
				inbenta: {
					title: 'Desarrollador Frontend y Diseñador UX/UI',
					duration: 'De marzo de 2016 a mayo de 2019',
					company: 'Inbenta',
					text: 'Trabajé en el desarrollo de interfaces web orientadas a producto, combinando frontend y diseño UX/UI. Definí patrones de estilos y componentes reutilizables, mejorando la consistencia visual y la escalabilidad del frontend en diferentes productos y plataformas.'
				},
				ingens: {
					title: 'Diseñador UI',
					duration: 'De diciembre de 2012 a octubre de 2014',
					company: 'Ingens Networks',
					text: 'Responsable del diseño de interfaces y piezas visuales para producto, trabajando en UI, motion, renderizado y diseño gráfico. Esta etapa sentó las bases de mi criterio visual y de interacción, que más adelante trasladé al desarrollo frontend y a la creación de sistemas de diseño.'
				}
			},
			work: {
				title: 'Trabajo',
				description: 'Algunos de los proyectos más destacados que he construido',
				fxs_app: {
					title: 'FXStreet App',
					text: 'Lideré el frontend de una app mobile-first y fui el nexo entre diseño, producto y backend. Definí la arquitectura base y el sistema de componentes con Expo, React Native y Tailwind, asegurando una base mantenible para iterar rápido con calidad (tests con Jest y validación con usuarios).'
				},
				fxs_landing: {
					title: 'FXStreet Premium Landing',
					text: 'Definí un sistema de plantillas y componentes para las landings de Premium, reduciendo fricción en el delivery y mejorando consistencia. Se trabajó con React y Storybook, estandarizando patrones para que el equipo pudiera escalar páginas sin reinventar la rueda.'
				},
				fxs_web: {
					title: 'FXStreet Website',
					text: 'Me encargué del mantenimiento y desarrollo de nuevas funcionalidades, así como de la estructura de estilos con Sass. Trabajé en mejorar la arquitectura CSS y en asegurar la coherencia visual en todo el sitio.'
				},
				tiendeo_web: {
					title: 'Tiendeo Website',
					text: 'Me encargué del mantenimiento de la web y de mejoras en el visor de catálogos, optimizando la experiencia de usuario y el rendimiento de la plataforma.'
				},
				shopfully_website: {
					title: 'Shopfully Website',
					text: 'Lideré el desarrollo y el diseño de la web, construyendo una base sólida en WordPress/PHP con Vanilla.js y SCSS. Implementé un sistema de plugins para que el equipo editorial pudiera gestionar contenido con autonomía sin romper consistencia.'
				}
			},
			contact: {
				title: 'Ponte en contacto',
				description:
					'¿Qué sigue? No dudes en contactarme si estás buscando un desarrollador, tienes alguna pregunta o simplemente quieres conectar.',
				name: 'Nombre',
				email: 'Correo electrónico',
				phone: 'Teléfono',
				company: 'Empresa',
				subject: 'Asunto',
				message: 'Mensaje',
				send: 'Enviar mensaje'
			},
			footer: {
				text: '2026 | Diseñado y codificado con ❤️️ por Fernando Bendala'
			}
		}
	}
};

export default es;
