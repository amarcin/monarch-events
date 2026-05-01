<script lang="ts">
	import Botanical from '$lib/Botanical.svelte';
	import { about, site } from '$lib/content';
</script>

<svelte:head>
	<title>About — {site.business_name}</title>
</svelte:head>

<section class="mx-auto max-w-3xl text-center">
	<h2 class="font-serif text-5xl">{about.heading}</h2>
	<Botanical class="text-terracotta/40 mx-auto mt-4 h-16 w-56" variant="branch" />
	<p class="text-ink/80 mt-8 text-lg leading-relaxed">{about.intro}</p>
</section>

<hr class="hairline mx-auto my-16 w-32" />

<section class="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
	{#each about.chefs as chef (chef.name)}
		<article>
			<h3 class="font-serif text-3xl">{chef.name}</h3>
			<p class="text-terracotta/80 mt-1 text-xs tracking-[0.2em] uppercase">{chef.role}</p>
			{#each chef.bio_paragraphs as para, i (i)}
				<p class="text-ink/80 mt-4 text-sm leading-relaxed">{para}</p>
			{/each}
		</article>
	{/each}
</section>

<hr class="hairline mx-auto my-16 w-32" />

<section class="mx-auto max-w-3xl">
	<h3 class="text-center font-serif text-3xl">{about.sourcing_heading}</h3>
	<ul class="text-ink/80 mt-6 space-y-3 text-sm leading-relaxed">
		{#each about.sourcing as item (item.label)}
			<li>
				<span class="text-terracotta font-serif text-lg">{item.label} —</span>
				{item.body}
			</li>
		{/each}
	</ul>
</section>

<section class="mt-20 text-center">
	<p class="text-ink/70 mx-auto max-w-2xl text-sm leading-relaxed italic">
		{about.closing_note}
	</p>
</section>
