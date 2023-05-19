import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const config: UserConfig = {
	plugins: [sveltekit(), ViteImageOptimizer()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
