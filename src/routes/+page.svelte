<script lang="ts">
	import Botanical from '$lib/Botanical.svelte';
</script>

<section class="relative pt-4 pb-20 text-center">
	<Botanical class="text-terracotta/50 mx-auto mb-8 h-20 w-72" variant="branch" />
	<p class="text-terracotta font-serif text-3xl italic md:text-4xl">
		an evening, an occasion, a table worth remembering.
	</p>
	<p class="text-ink/75 mx-auto mt-6 max-w-2xl text-base leading-relaxed">
		Monarch Events is a Dallas-based private dining company. Ella and Nina build intimate,
		seasonal tasting experiences in your home, your venue, or ours — from four-course dinners
		for eight to plated service for fifty.
	</p>
	<div class="mt-10 flex flex-wrap justify-center gap-4">
		<a
			href="/contact"
			class="border-terracotta text-terracotta hover:bg-terracotta inline-block rounded-sm border px-8 py-3 text-sm tracking-[0.25em] uppercase no-underline transition hover:text-white"
		>
			book a dinner
		</a>
		<a
			href="/menus"
			class="text-terracotta/80 hover:text-terracotta inline-block px-8 py-3 text-sm tracking-[0.25em] uppercase no-underline"
		>
			see the menus →
		</a>
	</div>
</section>

<hr class="hairline w-full" />

<section class="grid gap-12 py-20 md:grid-cols-3">
	<div>
		<h3 class="font-serif text-2xl">Seasonal menus</h3>
		<p class="text-ink/75 mt-3 text-sm leading-relaxed">
			Menus are written around what's arriving at the Dallas Farmers Market each week —
			never a static list. Expect four to seven courses, wine pairings on request, and
			dietary adaptations handled without fuss.
		</p>
	</div>
	<div>
		<h3 class="font-serif text-2xl">In your space</h3>
		<p class="text-ink/75 mt-3 text-sm leading-relaxed">
			We cook in your kitchen. We bring knives, linens, serviceware, and two pairs of
			hands. You bring the people. Your place leaves cleaner than we found it.
		</p>
	</div>
	<div>
		<h3 class="font-serif text-2xl">Two chefs, one voice</h3>
		<p class="text-ink/75 mt-3 text-sm leading-relaxed">
			Ella trained at Lucia and Homewood Kitchen. Nina ran pastry at Petra & the Beast.
			Together since 2024, we plate everything ourselves — no brigade, no middlemen.
		</p>
	</div>
</section>

<hr class="hairline w-full" />

<section class="py-20 text-center">
	<h2 class="font-serif text-4xl md:text-5xl">What a Monarch dinner looks like</h2>
	<div class="text-ink/80 mx-auto mt-10 grid max-w-4xl gap-10 text-left md:grid-cols-2">
		<div>
			<p class="text-terracotta font-serif text-xl">One week before</p>
			<p class="mt-2 text-sm leading-relaxed">
				A 30-minute planning call. We write a menu around the occasion, the guests, the
				season, and the wine you'd like to pour. You sign off; we source.
			</p>
		</div>
		<div>
			<p class="text-terracotta font-serif text-xl">The day of</p>
			<p class="mt-2 text-sm leading-relaxed">
				We arrive three hours before service. Prep, stage, set the table if you'd like
				us to. Your kitchen becomes ours, quietly.
			</p>
		</div>
		<div>
			<p class="text-terracotta font-serif text-xl">Service</p>
			<p class="mt-2 text-sm leading-relaxed">
				Courses land at the pace of the conversation, not the clock. We introduce each
				dish briefly. No theatrics — the food does that.
			</p>
		</div>
		<div>
			<p class="text-terracotta font-serif text-xl">After</p>
			<p class="mt-2 text-sm leading-relaxed">
				Dishes washed, trash out, leftovers plated for tomorrow. You'll forget we were
				there, except for the thank-you notes your guests send you the next morning.
			</p>
		</div>
	</div>
</section>

<hr class="hairline w-full" />

<section class="py-20">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="font-serif text-4xl md:text-5xl">A few kind words</h2>
		<Botanical class="text-terracotta/40 mx-auto mt-6 h-16 w-48" variant="branch" />
		<figure class="mt-10">
			<blockquote class="text-ink/80 font-serif text-2xl italic leading-snug md:text-3xl">
				"The best meal I've eaten in a private home, full stop. Ella and Nina ran our
				anniversary dinner for twelve and every course was better than the last."
			</blockquote>
			<figcaption class="text-ink/60 mt-4 text-sm tracking-[0.2em] uppercase">
				— Margaret H., Highland Park
			</figcaption>
		</figure>
	</div>
</section>

<section class="py-16 text-center">
	<h2 class="font-serif text-3xl md:text-4xl">Have a date in mind?</h2>
	<p class="text-ink/75 mx-auto mt-4 max-w-xl text-sm leading-relaxed">
		We book roughly six weeks out. Holidays and weekends fill first. Tell us what you're
		thinking and we'll write back within two days.
	</p>
	<a
		href="/contact"
		class="border-terracotta text-terracotta hover:bg-terracotta mt-8 inline-block rounded-sm border px-10 py-3 text-sm tracking-[0.25em] uppercase no-underline transition hover:text-white"
	>
		start a conversation
	</a>
</section>
