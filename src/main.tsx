import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import '@/localization/index';

import App from './app.tsx';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HelmetProvider>
			<App />
		</HelmetProvider>
	</StrictMode>
);
