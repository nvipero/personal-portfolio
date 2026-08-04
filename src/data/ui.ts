import { site } from "./site";

/**
 * Recurring UI strings, keyed by language code. Adding Finnish means adding a
 * `fi` block here — the `UiStrings` type below makes TypeScript complain at
 * build time about any key a translation forgets.
 */
export const ui = {
	en: {
		/** Short enough that "<homeTitle> — <site.name>" stays under ~60 characters. */
		homeTitle: "Senior frontend & full stack developer",
		tagline: "Senior frontend & full stack developer in Helsinki, Finland",
		nav: { label: "Main", home: "Home", projects: "Projects", contact: "Contact" },
		skipToContent: "Skip to content",
		present: "Present",
		skills: "Skills",
		background: "Background",
		selectedWork: "Selected work",
		viewAllProjects: "View all projects",
		allProjects: "Project experience",
		earlierRoles: "Earlier roles",
		messageOn: "Message me on",
		elsewhere: "Elsewhere",
	},
} as const;

export type UiStrings = (typeof ui)["en"];

export const t: UiStrings = ui[site.defaultLocale];
