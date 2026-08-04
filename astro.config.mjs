// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	image: {
		// The only image on the site is a small profile photo, already exported at
		// the exact size it is displayed at (240px for a 120px slot on 2x screens).
		// That makes Sharp — a ~30 MB native build dependency — unnecessary here.
		// Switch to the default service if the site ever gets real image content.
		service: passthroughImageService(),
	},
});
