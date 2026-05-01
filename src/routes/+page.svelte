<script lang="ts">
	import Botanical from '$lib/Botanical.svelte';
	import { home } from '$lib/content';
</script>

<section class="relative pt-4 pb-20 text-center">
	<Botanical class="text-terracotta/50 mx-auto mb-8 h-20 w-72" variant="branch" />
	<p class="text-terracotta font-serif text-3xl italic md:text-4xl">
		{home.hero_headline}
	</p>
	<p class="text-ink/75 mx-auto mt-6 max-w-2xl text-base leading-relaxed">
		{home.hero_description}
	</p>
	<div class="mt-10 flex flex-wrap justify-center gap-4">
		<a
			href="/contact"
			class="border-terracotta text-terracotta hover:bg-terracotta inline-block rounded-sm border px-8 py-3 text-sm tracking-[0.25em] uppercase no-underline transition hover:text-white"
		>
			{home.primary_cta_label}
		</a>
		<a
			href="/menus"
			class="text-terracotta/80 hover:text-terracotta inline-block px-8 py-3 text-sm tracking-[0.25em] uppercase no-underline"
		>
			{home.secondary_cta_label}
		</a>
	</div>
</section>

<hr class="hairline w-full" />

<section class="grid gap-12 py-20 md:grid-cols-3">
	{#each home.pillars as pillar (pillar.title)}
		<div>
			<h3 class="font-serif text-2xl">{pillar.title}</h3>
			<p class="text-ink/75 mt-3 text-sm leading-relaxed">{pillar.body}</p>
		</div>
	{/each}
</section>

<hr class="hairline w-full" />

<section class="py-20 text-center">
	<h2 class="font-serif text-4xl md:text-5xl">{home.timeline_heading}</h2>
	<div class="text-ink/80 mx-auto mt-10 grid max-w-4xl gap-10 text-left md:grid-cols-2">
		{#each home.timeline as step (step.phase)}
			<div>
				<p class="text-terracotta font-serif text-xl">{step.phase}</p>
				<p class="mt-2 text-sm leading-relaxed">{step.body}</p>
			</div>
		{/each}
	</div>
</section>

<hr class="hairline w-full" />

<section class="py-20">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="font-serif text-4xl md:text-5xl">{home.testimonial_heading}</h2>
		<Botanical class="text-terracotta/40 mx-auto mt-6 h-16 w-48" variant="branch" />
		<figure class="mt-10">
			<blockquote class="text-ink/80 font-serif text-2xl italic leading-snug md:text-3xl">
				"{home.testimonial_quote}"
			</blockquote>
			<figcaption class="text-ink/60 mt-4 text-sm tracking-[0.2em] uppercase">
				— {home.testimonial_attribution}
			</figcaption>
		</figure>
	</div>
</section>

<section class="py-16 text-center">
	<h2 class="font-serif text-3xl md:text-4xl">{home.closing_heading}</h2>
	<p class="text-ink/75 mx-auto mt-4 max-w-xl text-sm leading-relaxed">
		{home.closing_body}
	</p>
	<a
		href="/contact"
		class="border-terracotta text-terracotta hover:bg-terracotta mt-8 inline-block rounded-sm border px-10 py-3 text-sm tracking-[0.25em] uppercase no-underline transition hover:text-white"
	>
		{home.closing_cta_label}
	</a>
</section>
