import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	assetsInclude: ['./src/assets/scss/*.scss'],
	css: {
		loaderOptions: {
			sass: { additionalData: ` @import "@/style/index.scss"; ` }
		}
	}
});
