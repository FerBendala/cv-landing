import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import '@/location/index';

import App from './app.tsx';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
