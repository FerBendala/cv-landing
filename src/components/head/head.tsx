import { Helmet } from 'react-helmet-async';

import photoNextGen from '@image/webp/photo.webp';

import { useLocation } from '@/hooks/useLocation';

const SITE_URL = 'https://ferbendala.dev';
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const Head = () => {
	const { t } = useLocation('translation', { keyPrefix: 'meta' });

	const title = t('title');
	const description = t('description');

	return (
		<Helmet>
			{/* Primary Meta Tags */}
			<title>{title}</title>
			<meta name='description' content={description} />
			<link rel='canonical' href={SITE_URL} />

			{/* Open Graph / Facebook */}
			<meta property='og:type' content='website' />
			<meta property='og:url' content={SITE_URL} />
			<meta property='og:title' content={`${title} - Frontend Architect`} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={OG_IMAGE} />
			<meta property='og:locale' content='en_US' />

			{/* Twitter */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:url' content={SITE_URL} />
			<meta name='twitter:title' content={`${title} - Frontend Architect`} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={OG_IMAGE} />

			{/* Preload */}
			<link rel='preload' as='image' href={photoNextGen} />
		</Helmet>
	);
};

export default Head;
