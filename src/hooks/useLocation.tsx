import { UseTranslationOptions, useTranslation } from 'react-i18next';

const useLocation = (ns?: string, options?: UseTranslationOptions<string>) => {
	const { t, i18n } = useTranslation(ns, options);

	return { t, i18n };
};

export default useLocation;
