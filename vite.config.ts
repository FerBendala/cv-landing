import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@use "./assets/scss/variables" as *;
					@use "./assets/scss/functions" as f;
					@use "./assets/scss/mixins" as m;
					@import "./assets/scss/reset";
				`
			}
		}
	}
});
