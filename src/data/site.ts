/** Language-independent site data. Translatable strings live in ui.ts. */

const linkedin = {
	label: "LinkedIn",
	href: "https://www.linkedin.com/in/nikomartiskainen/",
} as const;

const github = {
	label: "GitHub",
	href: "https://github.com/nvipero",
} as const;

export const site = {
	name: "Niko Martiskainen",
	defaultLocale: "en",
	/** Primary way to get in touch. Deliberately not an email address. */
	contact: linkedin,
	links: [linkedin, github],
} as const;
