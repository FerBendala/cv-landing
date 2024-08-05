import { Helmet } from 'react-helmet-async';

import photoNextGen from '@image/webp/photo.webp';

import { useLocation } from '@/hooks/useLocation';

const Head = () => {
	const { t } = useLocation('translation', { keyPrefix: 'meta' });

	return (
		<Helmet>
			<title>{t('title')}</title>
			<meta name='description' content={t('description')} />
			<link rel='preload' as='image' href={photoNextGen}></link>
		</Helmet>
	);
};

export default Head;
