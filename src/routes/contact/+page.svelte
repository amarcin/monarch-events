<script lang="ts">
	import Botanical from '$lib/Botanical.svelte';
</script>

<svelte:head>
	<title>Contact — Monarch Events</title>
</svelte:head>

<section class="mx-auto max-w-2xl text-center">
	<h2 class="font-serif text-5xl">Let's plan something</h2>
	<Botanical class="text-terracotta/40 mx-auto mt-4 h-16 w-56" variant="branch" />
	<p class="text-ink/80 mt-8 text-base leading-relaxed">
		The best way to reach us is email. Tell us the occasion, rough date, how many guests
		you're thinking, and where — we'll write back within two business days with a proposed
		menu and a quote.
	</p>
</section>

<section class="mx-auto mt-16 max-w-2xl">
	<form
		name="inquiry"
		method="POST"
		action="mailto:monarchevents@gmailgroups.com"
		enctype="text/plain"
		class="space-y-6"
	>
		<div>
			<label for="name" class="text-terracotta/80 block text-xs tracking-[0.2em] uppercase">
				your name
			</label>
			<input
				id="name"
				name="name"
				type="text"
				required
				class="border-terracotta/30 focus:border-terracotta mt-2 w-full border-0 border-b bg-transparent px-1 py-2 text-ink outline-none"
			/>
		</div>
		<div>
			<label for="email" class="text-terracotta/80 block text-xs tracking-[0.2em] uppercase">
				email
			</label>
			<input
				id="email"
				name="email"
				type="email"
				required
				class="border-terracotta/30 focus:border-terracotta mt-2 w-full border-0 border-b bg-transparent px-1 py-2 text-ink outline-none"
			/>
		</div>
		<div class="grid gap-6 md:grid-cols-2">
			<div>
				<label
					for="date"
					class="text-terracotta/80 block text-xs tracking-[0.2em] uppercase"
				>
					target date
				</label>
				<input
					id="date"
					name="date"
					type="text"
					placeholder="e.g. June 14, or flexible"
					class="border-terracotta/30 focus:border-terracotta mt-2 w-full border-0 border-b bg-transparent px-1 py-2 text-ink outline-none"
				/>
			</div>
			<div>
				<label
					for="guests"
					class="text-terracotta/80 block text-xs tracking-[0.2em] uppercase"
				>
					guest count
				</label>
				<input
					id="guests"
					name="guests"
					type="text"
					placeholder="e.g. 12"
					class="border-terracotta/30 focus:border-terracotta mt-2 w-full border-0 border-b bg-transparent px-1 py-2 text-ink outline-none"
				/>
			</div>
		</div>
		<div>
			<label
				for="occasion"
				class="text-terracotta/80 block text-xs tracking-[0.2em] uppercase"
			>
				occasion & location
			</label>
			<input
				id="occasion"
				name="occasion"
				type="text"
				placeholder="e.g. Anniversary in Highland Park"
				class="border-terracotta/30 focus:border-terracotta mt-2 w-full border-0 border-b bg-transparent px-1 py-2 text-ink outline-none"
			/>
		</div>
		<div>
			<label
				for="message"
				class="text-terracotta/80 block text-xs tracking-[0.2em] uppercase"
			>
				tell us more
			</label>
			<textarea
				id="message"
				name="message"
				rows="5"
				placeholder="What are you imagining? Dietary considerations? Wine preferences?"
				class="border-terracotta/30 focus:border-terracotta mt-2 w-full border-0 border-b bg-transparent px-1 py-2 text-ink outline-none"
			></textarea>
		</div>
		<div class="pt-4 text-center">
			<button
				type="submit"
				class="bg-terracotta hover:bg-terracotta-soft rounded-sm px-12 py-3 text-sm tracking-[0.25em] text-white uppercase transition"
			>
				send inquiry
			</button>
		</div>
	</form>
</section>

<hr class="hairline mx-auto my-20 w-32" />

<section class="mx-auto max-w-2xl text-center">
	<h3 class="font-serif text-3xl">Or reach us directly</h3>
	<div class="text-ink/80 mt-6 space-y-2">
		<p>
			<span class="text-terracotta/70 text-xs tracking-[0.2em] uppercase">email</span><br />
			<a href="mailto:monarchevents@gmailgroups.com" class="font-serif text-xl">
				monarchevents@gmailgroups.com
			</a>
		</p>
		<p class="mt-6">
			<span class="text-terracotta/70 text-xs tracking-[0.2em] uppercase">phone</span><br />
			<a href="tel:+15108378746" class="font-serif text-xl">(510) 837-8746</a>
		</p>
		<p class="mt-6">
			<span class="text-terracotta/70 text-xs tracking-[0.2em] uppercase">based in</span><br />
			<span class="font-serif text-xl">Dallas, Texas</span>
		</p>
	</div>
	<p class="text-ink/60 mx-auto mt-10 max-w-md text-xs leading-relaxed italic">
		We travel within 90 minutes of Dallas without a travel fee. Farther than that, ask —
		we've cooked in Austin, Marfa, and on Lake Travis and always find a way.
	</p>
</section>
