import { text } from 'stream/consumers';

const en = {
	translation: {
		meta: {
			title: 'Fernando Bendala',
			description: 'Personal website of Fernando Bendala'
		},
		components: {
			menu: {
				download_cv: 'Download CV',
				skills: 'Skills',
				about: 'About',
				work: 'Work',
				contact: 'Contact',
				main_navigation: 'Main navigation',
				homepage: 'Homepage',
				switch_to_light_theme: 'Switch to light theme',
				switch_to_dark_theme: 'Switch to dark theme'
			},
			language_selector: {
				language_selector: 'Language',
				change_language: 'Change language',
				english: 'English',
				spanish: 'Spanish',
				catalan: 'Catalan'
			},
			accordion: {
				view_less: 'View less',
				view_more: 'View more'
			}
		},
		content: {
			header: {
				title: 'Hi, I’m Fer Bendala 👋',
				text: "I'm a full stack developer (React, Vanilla.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 3 years, I still love it as if it was something new.",
				country: 'Barcelona, Spain',
				status: 'Available for new projects'
			},
			skills: {
				title: 'Skills',
				description: 'The skills, tools and technologies I am really good at'
			},
			about: {
				title: 'About me',
				description: 'Here is a quick summary of my most recent experiences',
				fxstreet: {
					title: 'Sr. Frontend Developer',
					duration: 'Now - from October 2023',
					company: 'FXStreet',
					text: 'Developed dynamic and interactive web applications using cutting-edge technologies like React, JavaScript, and Sass, while ensuring optimal performance and scalability.'
				},
				tiendeo: {
					title: 'Sr. Frontend Developer',
					duration: '3 years - from November 2020 to October 2023',
					company: 'Tiendeo',
					text: 'Led the development of high-performance web applications, implemented automated processes for banner generation, and enhanced team efficiency through workflow analysis in Jira. Mentored junior developers and fostered a collaborative work environment.'
				},
				axpe: {
					title: 'Sr. Frontend Developer',
					duration: '~2 years - from July 2019 to October 2020',
					company: 'Axpe',
					text: 'Architected and implemented user-friendly web interfaces, improved development processes through automation, and analyzed team workflows to boost productivity. Provided training and guidance to junior team members.'
				},
				inbenta: {
					title: 'Sr. Frontend Developer',
					duration: '3 years - from March 2016 to May 2019',
					company: 'Inbenta',
					text: 'Crafted robust web applications using a variety of technologies, streamlined development tasks through automation, and enhanced team performance via workflow improvements. Mentored junior developers, contributing to their professional growth.'
				},
				ingens: {
					title: 'Sr. Frontend Developer',
					duration: '~2 years - from December 2012 to October 2014',
					company: 'Ingens',
					text: 'Engineered efficient web solutions, automated repetitive tasks, and analyzed team workflows to increase efficiency. Played a key role in training junior developers and supporting their development within the company.'
				}
			},
			work: {
				title: 'Work',
				description: 'Some of the noteworthy projects I have built',
				fxs_app: {
					title: 'FXStreet App',
					text: 'I was responsible for leading the frontend development team, implementing modern web technologies, and optimizing the user experience for high-traffic financial websites.'
				},
				fxs_landing: {
					title: 'FXStreet Premium Landing',
					text: 'My role included designing and developing user interfaces, collaborating with backend developers, and ensuring the delivery of high-quality, scalable web applications.'
				},
				shopfully_website: {
					title: 'Shopfully Website',
					text: 'I worked on enhancing website performance, integrating new features, and maintaining the overall architecture of the web applications to meet business requirements.'
				}
			},
			contact: {
				title: 'Get in touch',
				description:
					"What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.",
				name: 'Name',
				email: 'Email',
				phone: 'Phone',
				company: 'Company',
				subject: 'Subject',
				message: 'Message',
				send: 'Send message'
			},
			footer: {
				text: '2024 | Designed and coded with ❤️️ by Fernando Bendala'
			}
		}
	}
};

export default en;
