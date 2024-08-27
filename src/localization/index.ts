import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import ca from './ca';
import en from './en';
import es from './es';

const resources = { en, es, ca };

i18n.use(initReactI18next).init({
	resources,
	lng: 'es',
	interpolation: {
		escapeValue: false
	}
});

export default i18n;
