import type { PageLoad } from './$types';

type Event = {
	slug: string;
	title: string;
	date: string;
	time: string;
	location: string;
	seats: number;
	seats_remaining: number;
	price: number;
	featured: boolean;
	order: number;
	Component: unknown;
};

export const load: PageLoad = async () => {
	const files = import.meta.glob('/content/events/*.md', { eager: true });

	const events: Event[] = Object.entries(files).map(([path, mod]) => {
		const slug = path.split('/').pop()!.replace('.md', '');
		const m = mod as { metadata: Omit<Event, 'slug' | 'Component'>; default: unknown };
		return {
			slug,
			...m.metadata,
			Component: m.default
		};
	});

	events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
	return { events };
};
