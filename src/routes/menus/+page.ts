import type { PageLoad } from './$types';

type Menu = {
	slug: string;
	title: string;
	season: string;
	courses: number;
	price_per_guest: number;
	min_guests: number;
	max_guests: number;
	order: number;
	Component: unknown;
};

export const load: PageLoad = async () => {
	const files = import.meta.glob('/content/menus/*.md', { eager: true });

	const menus: Menu[] = Object.entries(files).map(([path, mod]) => {
		const slug = path.split('/').pop()!.replace('.md', '');
		const m = mod as { metadata: Omit<Menu, 'slug' | 'Component'>; default: unknown };
		return {
			slug,
			...m.metadata,
			Component: m.default
		};
	});

	menus.sort((a, b) => a.order - b.order);
	return { menus };
};
