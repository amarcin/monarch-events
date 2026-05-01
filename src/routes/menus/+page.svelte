<script lang="ts">
	import Botanical from '$lib/Botanical.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Menus — Monarch Events</title>
</svelte:head>

<section class="mx-auto max-w-3xl text-center">
	<h2 class="font-serif text-5xl">Our Menus</h2>
	<Botanical class="text-terracotta/40 mx-auto mt-4 h-16 w-56" variant="branch" />
	<p class="text-ink/80 mt-8 text-base leading-relaxed">
		Four seasonal menus, rewritten each week to follow what's peaking. These are reference
		points — your actual menu is written around your party and confirmed one week before
		service. All prices per guest, food only. Wine and gratuity not included.
	</p>
</section>

<div class="mx-auto mt-20 max-w-3xl space-y-20">
	{#each data.menus as menu (menu.slug)}
		<article>
			<header class="text-center">
				<p class="text-terracotta/70 text-xs tracking-[0.3em] uppercase">
					{menu.season}
				</p>
				<h3 class="mt-2 font-serif text-4xl">{menu.title}</h3>
				<p class="text-ink/70 mt-3 text-sm">
					{menu.courses} courses · ${menu.price_per_guest} per guest · {menu.min_guests}–{menu.max_guests}
					guests
				</p>
				<Botanical class="text-terracotta/40 mx-auto mt-4 h-10 w-32" variant="branch" />
			</header>
			<div class="prose prose-terracotta mx-auto mt-8 max-w-none">
				<menu.Component />
			</div>
		</article>
	{/each}
</div>

<section class="mt-24 text-center">
	<h3 class="font-serif text-3xl">Need something different?</h3>
	<p class="text-ink/75 mx-auto mt-4 max-w-xl text-sm leading-relaxed">
		Vegetarian, pescatarian, kosher-style, gluten-free — we handle all of it, and we don't
		charge for the adaptation. Tell us what your guests need; we'll design around it.
	</p>
	<a
		href="/contact"
		class="border-terracotta text-terracotta hover:bg-terracotta mt-8 inline-block rounded-sm border px-10 py-3 text-sm tracking-[0.25em] uppercase no-underline transition hover:text-white"
	>
		ask us anything
	</a>
</section>

<style>
	:global(.prose) {
		color: var(--color-ink);
		font-size: 0.95rem;
		line-height: 1.8;
	}
	:global(.prose strong) {
		color: var(--color-terracotta);
		font-family: var(--font-serif);
		font-weight: 500;
		font-size: 1.05rem;
	}
	:global(.prose ul) {
		list-style: none;
		padding-left: 0;
	}
	:global(.prose li) {
		border-bottom: 1px dotted rgba(184, 90, 31, 0.2);
		padding: 0.75rem 0;
	}
	:global(.prose li:last-child) {
		border-bottom: 0;
	}
</style>
