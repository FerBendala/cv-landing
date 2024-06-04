import { useEffect } from 'react';
import { UseTranslationOptions, useTranslation } from 'react-i18next';

import useLanguageStore from '@/stores/language.store';

const useLocation = (ns?: string, options?: UseTranslationOptions<string>) => {
	const { language } = useLanguageStore();
	const { t, i18n } = useTranslation(ns, options);

	useEffect(() => {
		i18n.changeLanguage(language);
	}, [language, i18n]);

	return {
		t,
		language,
		setLanguage: useLanguageStore.getState().setLanguage
	};
};

export { useLocation };
