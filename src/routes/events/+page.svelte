<script lang="ts">
	import Botanical from '$lib/Botanical.svelte';
	import { events, site } from '$lib/content';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	function formatDate(iso: string) {
		const d = new Date(iso + 'T12:00:00');
		return d.toLocaleDateString('en-US', {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Upcoming Events — {site.business_name}</title>
</svelte:head>

<section class="mx-auto max-w-3xl text-center">
	<h2 class="font-serif text-5xl">{events.heading}</h2>
	<Botanical class="text-terracotta/40 mx-auto mt-4 h-16 w-56" variant="branch" />
	<p class="text-ink/80 mt-8 text-base leading-relaxed">{events.intro}</p>
</section>

<div class="mx-auto mt-16 max-w-3xl space-y-8">
	{#each data.events as event (event.slug)}
		<article
			class="border-terracotta/30 relative rounded-sm border bg-white/40 p-8 backdrop-blur"
		>
			{#if event.featured}
				<span
					class="bg-terracotta absolute -top-3 left-8 px-3 py-1 text-[10px] tracking-[0.25em] text-white uppercase"
				>
					featured
				</span>
			{/if}
			<div class="flex flex-wrap items-baseline justify-between gap-4">
				<div>
					<h3 class="font-serif text-3xl">{event.title}</h3>
					<p class="text-terracotta/80 mt-2 text-sm">
						{formatDate(event.date)} · {event.time}
					</p>
					<p class="text-ink/70 mt-1 text-sm">{event.location}</p>
				</div>
				<div class="text-right">
					<p class="text-terracotta font-serif text-3xl">${event.price}</p>
					<p class="text-ink/60 text-xs tracking-wider uppercase">per guest</p>
				</div>
			</div>
			<div class="prose prose-sm text-ink/80 mt-5 max-w-none leading-relaxed">
				<event.Component />
			</div>
			<div class="mt-6 flex flex-wrap items-center justify-between gap-4">
				<p class="text-sm">
					{#if event.seats_remaining === 0}
						<span class="text-ink/50 italic">Sold out</span>
					{:else if event.seats_remaining <= 4}
						<span class="text-terracotta font-medium">
							{event.seats_remaining} of {event.seats} seats remaining
						</span>
					{:else}
						<span class="text-ink/70">
							{event.seats_remaining} of {event.seats} seats remaining
						</span>
					{/if}
				</p>
				{#if event.seats_remaining > 0}
					<a
						href="mailto:{site.contact_email}?subject=Reservation: {event.title}"
						class="border-terracotta text-terracotta hover:bg-terracotta rounded-sm border px-6 py-2 text-xs tracking-[0.2em] uppercase no-underline transition hover:text-white"
					>
						reserve
					</a>
				{/if}
			</div>
		</article>
	{/each}
</div>

<section class="mt-24 text-center">
	<p class="text-ink/70 mx-auto max-w-2xl text-sm leading-relaxed italic">
		{events.closing_note}
	</p>
	<a
		href="/contact"
		class="text-terracotta mt-4 inline-block text-sm tracking-[0.2em] uppercase no-underline"
	>
		{events.closing_cta_label}
	</a>
</section>
