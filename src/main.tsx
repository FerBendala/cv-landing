import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/app.tsx';
import '@/location';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
