import { Helmet } from 'react-helmet-async';

import { useLocation } from '@/hooks/useLocation';

const Head = () => {
	const { t } = useLocation('translation', { keyPrefix: 'meta' });

	return (
		<Helmet>
			<title>{t('title')}</title>
			<meta name='description' content={t('description')} />
		</Helmet>
	);
};

export default Head;
