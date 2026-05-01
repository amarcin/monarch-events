const settings = import.meta.glob('/content/settings/*.md', { eager: true });
const pages = import.meta.glob('/content/pages/*.md', { eager: true });

type Frontmatter = { metadata: Record<string, unknown> };

function flatten(files: Record<string, unknown>) {
	const out: Record<string, Record<string, unknown>> = {};
	for (const [path, mod] of Object.entries(files)) {
		const slug = path.split('/').pop()!.replace('.md', '');
		out[slug] = (mod as Frontmatter).metadata ?? {};
	}
	return out;
}

export type SiteSettings = {
	business_name: string;
	tagline: string;
	footer_tagline: string;
	contact_email: string;
	location: string;
};

export type HomeContent = {
	hero_headline: string;
	hero_description: string;
	primary_cta_label: string;
	secondary_cta_label: string;
	pillars: { title: string; body: string }[];
	timeline_heading: string;
	timeline: { phase: string; body: string }[];
	testimonial_heading: string;
	testimonial_quote: string;
	testimonial_attribution: string;
	closing_heading: string;
	closing_body: string;
	closing_cta_label: string;
};

export type AboutContent = {
	heading: string;
	intro: string;
	chefs: { name: string; role: string; bio_paragraphs: string[] }[];
	sourcing_heading: string;
	sourcing: { label: string; body: string }[];
	closing_note: string;
};

export type MenusContent = {
	heading: string;
	intro: string;
	closing_heading: string;
	closing_body: string;
	closing_cta_label: string;
};

export type EventsContent = {
	heading: string;
	intro: string;
	closing_note: string;
	closing_cta_label: string;
};

export type ContactContent = {
	heading: string;
	intro: string;
	form_submit_label: string;
	form_name_label: string;
	form_email_label: string;
	form_date_label: string;
	form_date_placeholder: string;
	form_guests_label: string;
	form_guests_placeholder: string;
	form_occasion_label: string;
	form_occasion_placeholder: string;
	form_message_label: string;
	form_message_placeholder: string;
	direct_heading: string;
	travel_note: string;
};

const siteMap = flatten(settings);
const pagesMap = flatten(pages);

export const site = siteMap.site as unknown as SiteSettings;
export const home = pagesMap.home as unknown as HomeContent;
export const about = pagesMap.about as unknown as AboutContent;
export const menus = pagesMap.menus as unknown as MenusContent;
export const events = pagesMap.events as unknown as EventsContent;
export const contact = pagesMap.contact as unknown as ContactContent;
