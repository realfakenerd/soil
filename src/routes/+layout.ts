import type { LayoutLoad } from './$types';

export const prerender = true;

export const load = (async ({ url }) => {
	return {
		currentUrl: url.pathname
	};
}) satisfies LayoutLoad;
