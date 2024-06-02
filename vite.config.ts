import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

const dynamicPath = (route: string) => {
	try {
		return path.resolve(new URL('.', import.meta.url).pathname, route);
	} catch (error) {
		console.error(`Error resolving path for route: ${route}`, error);
		return route;
	}
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths(), svgr({ include: '**/*.svg?react' })],
	resolve: {
		alias: {
			'@mixins': dynamicPath('src/assets/scss/mixins'),
			'@functions': dynamicPath('src/assets/scss/functions'),
			'@variables': dynamicPath('src/assets/scss/variables'),
			'@reset': dynamicPath('src/assets/scss/reset')
		}
	}
});
