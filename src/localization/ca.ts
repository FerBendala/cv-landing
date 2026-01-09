const ca = {
	translation: {
		meta: {
			title: 'Fernando Bendala',
			description: 'Lloc personal de Fernando Bendala'
		},
		components: {
			menu: {
				download_cv: 'Descarregar CV',
				skills: 'Habilitats',
				about: 'Perfil',
				work: 'Treball',
				contact: 'Contacte',
				main_navigation: 'Navegació principal',
				homepage: 'Pàgina d’inici',
				switch_to_light_theme: 'Canviar a tema clar',
				switch_to_dark_theme: 'Canviar a tema fosc'
			},
			language_selector: {
				language_selector: 'Idioma',
				change_language: 'Canviar idioma',
				english: 'Anglès',
				spanish: 'Espanyol',
				catalan: 'Català'
			},
			accordion: {
				view_less: 'Veure menys',
				view_more: 'Veure més'
			}
		},
		content: {
			header: {
				title: 'Hola, sóc Fer Bendala 👋',
				subtitle: 'Frontend Architect · Tech Lead · Design Systems',
				text: "Construeixo plataformes frontend que escalen entre equips, amb focus en arquitectura, sistemes de disseny, rendiment i experiència de desenvolupament. El meu perfil es mou entre l'enginyeria i el disseny UX/UI: he liderat sistemes compartits, llançat productes des de zero i definit estàndards que permeten entregar ràpid sense perdre qualitat.",
				country: 'Barcelona, Espanya',
				status: 'Disponible per a nous projectes'
			},
			skills: {
				title: 'Habilitats',
				description: "Les habilitats, eines i tecnologies que m'encanten",
				categories: {
					architecture: 'Arquitectura & Sistemes Frontend',
					styling: 'UI & Styling',
					productivity: 'Productivitat & DX',
					design: 'Disseny & UX/UI'
				}
			},
			about: {
				title: 'Sobre mi',
				description:
					'Aquí tens un resum de la meva trajectòria recent i del tipus de problemes en què acostumo a aportar més valor',
				inditex: {
					title: 'Frontend Lead',
					duration: 'Actualment - des de gener de 2025',
					company: 'Inditex (a través de Kelea)',
					text: "Lidero l'arquitectura frontend en plataformes enterprise globals, prenent decisions estructurals i definint estàndards compartits entre equips. Em mantinc implicat a nivell tècnic quan és necessari, treballant en contextos multiequip i assegurant que els sistemes frontend compartits escalin correctament en rendiment, mantenibilitat i experiència de desenvolupament."
				},
				fxstreet: {
					title: 'Frontend Lead',
					duration: "D'octubre de 2023 a desembre de 2024",
					company: 'FXStreet',
					text: "Responsable de l'arquitectura i del desenvolupament frontend d'un producte mobile-first construït des de zero. Vaig definir la base tècnica, els criteris de qualitat i l'estructura de navegació, combinant bones pràctiques d'arquitectura i disseny. Vaig col·laborar estretament amb disseny, producte i QA per assegurar una entrega consistent, mantenint el focus en rendiment, mantenibilitat i capacitat d'iteració de l'equip."
				},
				tiendeo: {
					title: 'Frontend Lead i Dissenyador UX/UI de Sistemes',
					duration: 'De novembre de 2020 a octubre de 2023',
					company: 'Tiendeo',
					text: "Vaig liderar el desenvolupament de sistemes de disseny i arquitectures frontend compartides, combinant visió tècnica i disseny UX/UI. Vaig definir estàndards reutilitzables, fluxos escalables i processos d'automatització creativa que van reduir significativament els temps de producció (al voltant d'un 80% en casos concrets). El meu rol va estar centrat a millorar la col·laboració entre equips sense comprometre qualitat ni velocitat d'entrega."
				},
				axpe: {
					title: 'Desenvolupador Frontend i Dissenyador UX/UI',
					duration: 'De juliol de 2019 a octubre de 2020',
					company: 'Axpe Consulting',
					text: 'Vaig treballar en projectes per a clients combinant frontend i UX/UI, adaptant solucions tècniques a contextos diferents i establint bases sòlides de mantenibilitat i col·laboració amb disseny i backend.'
				},
				inbenta: {
					title: 'Desenvolupador Frontend i Dissenyador UX/UI',
					duration: 'De març de 2016 a maig de 2019',
					company: 'Inbenta',
					text: "Vaig contribuir al desenvolupament d'interfícies orientades a producte, definint patrons d'estils i components reutilitzables que van facilitar l'evolució del frontend en diferents productes i plataformes."
				},
				ingens: {
					title: 'Dissenyador UI',
					duration: 'De desembre de 2012 a octubre de 2014',
					company: 'Ingens Networks',
					text: "Etapa centrada en disseny UI, motion i sistemes visuals, que va definir el meu criteri d'interacció i consistència, i que més endavant vaig traslladar al desenvolupament frontend i a sistemes de disseny."
				},
				closing:
					"M'agrada especialment treballar en sistemes on arquitectura, disseny i desenvolupament no competeixen entre si, sinó que es reforcen."
			},
			work: {
				title: 'Treball',
				description: 'Alguns dels projectes més destacats que he construït',
				fxs_app: {
					title: 'FXStreet App',
					text: "Vaig liderar el frontend d'una app mobile-first i vaig ser el nexe entre disseny, producte i backend. Vaig definir l'arquitectura base i el sistema de components amb Expo, React Native i Tailwind, assegurant una base mantenible per iterar ràpid amb qualitat (tests amb Jest i validació amb usuaris)."
				},
				fxs_landing: {
					title: 'FXStreet Premium Landing',
					text: "Vaig definir un sistema de plantilles i components per a les landings de Premium, reduint fricció en el delivery i millorant consistència. Es va treballar amb React i Storybook, estandarditzant patrons perquè l'equip pogués escalar pàgines sense reinventar la roda."
				},
				fxs_web: {
					title: 'FXStreet Website',
					text: "Vaig participar en l'evolució del frontend del lloc, millorant l'arquitectura d'estils amb Sass, reforçant la coherència visual i assegurant una base més mantenible i consistent a llarg termini."
				},
				tiendeo_web: {
					title: 'Tiendeo Website',
					text: "Vaig treballar en l'estabilització i millora del frontend del lloc, optimitzant el visor de catàlegs i el rendiment general de la plataforma, amb focus en experiència d'usuari i sostenibilitat tècnica."
				},
				shopfully_website: {
					title: 'Shopfully Website',
					text: "Vaig liderar el desenvolupament i el disseny de la web, construint una base sòlida en WordPress/PHP amb Vanilla.js i SCSS. Vaig implementar un sistema de plugins perquè l'equip editorial pogués gestionar contingut amb autonomia sense trencar consistència."
				}
			},
			contact: {
				title: 'Posa’t en contacte',
				description:
					'Què segueix? No dubtis a contactar-me si estàs buscant un desenvolupador, tens alguna pregunta o simplement vols connectar.',
				name: 'Nom',
				email: 'Correu electrònic',
				phone: 'Telèfon',
				company: 'Empresa',
				subject: 'Assumpte',
				message: 'Missatge',
				send: 'Envia missatge'
			},
			footer: {
				text: '2026 | Dissenyat i codificat amb ❤️️ per Fernando Bendala'
			}
		}
	}
};

export default ca;
