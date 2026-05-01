<script lang="ts">
	import Botanical from '$lib/Botanical.svelte';
	import { contact, site } from '$lib/content';
</script>

<svelte:head>
	<title>Contact — {site.business_name}</title>
</svelte:head>

<section class="mx-auto max-w-2xl text-center">
	<h2 class="font-serif text-5xl">{contact.heading}</h2>
	<Botanical class="text-terracotta/40 mx-auto mt-4 h-16 w-56" variant="branch" />
	<p class="text-ink/80 mt-8 text-base leading-relaxed">{contact.intro}</p>
</section>

<section class="mx-auto mt-16 max-w-2xl">
	<form
		name="inquiry"
		method="POST"
		action="mailto:{site.contact_email}"
		enctype="text/plain"
		class="space-y-6"
	>
		<div>
			<label for="name" class="text-terracotta/80 block text-xs tracking-[0.2em] uppercase">
				{contact.form_name_label}
			</label>
			<input
				id="name"
				name="name"
				type="text"
				required
				class="border-terracotta/30 focus:border-terracotta text-ink mt-2 w-full border-0 border-b bg-transparent px-1 py-2 outline-none"
			/>
		</div>
		<div>
			<label for="email" class="text-terracotta/80 block text-xs tracking-[0.2em] uppercase">
				{contact.form_email_label}
			</label>
			<input
				id="email"
				name="email"
				type="email"
				required
				class="border-terracotta/30 focus:border-terracotta text-ink mt-2 w-full border-0 border-b bg-transparent px-1 py-2 outline-none"
			/>
		</div>
		<div class="grid gap-6 md:grid-cols-2">
			<div>
				<label
					for="date"
					class="text-terracotta/80 block text-xs tracking-[0.2em] uppercase"
				>
					{contact.form_date_label}
				</label>
				<input
					id="date"
					name="date"
					type="text"
					placeholder={contact.form_date_placeholder}
					class="border-terracotta/30 focus:border-terracotta text-ink mt-2 w-full border-0 border-b bg-transparent px-1 py-2 outline-none"
				/>
			</div>
			<div>
				<label
					for="guests"
					class="text-terracotta/80 block text-xs tracking-[0.2em] uppercase"
				>
					{contact.form_guests_label}
				</label>
				<input
					id="guests"
					name="guests"
					type="text"
					placeholder={contact.form_guests_placeholder}
					class="border-terracotta/30 focus:border-terracotta text-ink mt-2 w-full border-0 border-b bg-transparent px-1 py-2 outline-none"
				/>
			</div>
		</div>
		<div>
			<label
				for="occasion"
				class="text-terracotta/80 block text-xs tracking-[0.2em] uppercase"
			>
				{contact.form_occasion_label}
			</label>
			<input
				id="occasion"
				name="occasion"
				type="text"
				placeholder={contact.form_occasion_placeholder}
				class="border-terracotta/30 focus:border-terracotta text-ink mt-2 w-full border-0 border-b bg-transparent px-1 py-2 outline-none"
			/>
		</div>
		<div>
			<label
				for="message"
				class="text-terracotta/80 block text-xs tracking-[0.2em] uppercase"
			>
				{contact.form_message_label}
			</label>
			<textarea
				id="message"
				name="message"
				rows="5"
				placeholder={contact.form_message_placeholder}
				class="border-terracotta/30 focus:border-terracotta text-ink mt-2 w-full border-0 border-b bg-transparent px-1 py-2 outline-none"
			></textarea>
		</div>
		<div class="pt-4 text-center">
			<button
				type="submit"
				class="bg-terracotta hover:bg-terracotta-soft rounded-sm px-12 py-3 text-sm tracking-[0.25em] text-white uppercase transition"
			>
				{contact.form_submit_label}
			</button>
		</div>
	</form>
</section>

<hr class="hairline mx-auto my-20 w-32" />

<section class="mx-auto max-w-2xl text-center">
	<h3 class="font-serif text-3xl">{contact.direct_heading}</h3>
	<div class="text-ink/80 mt-6 space-y-6">
		<p>
			<span class="text-terracotta/70 text-xs tracking-[0.2em] uppercase">email</span><br />
			<a href="mailto:{site.contact_email}" class="font-serif text-xl">
				{site.contact_email}
			</a>
		</p>
		<p>
			<span class="text-terracotta/70 text-xs tracking-[0.2em] uppercase">based in</span><br />
			<span class="font-serif text-xl">{site.location}</span>
		</p>
	</div>
	<p class="text-ink/60 mx-auto mt-10 max-w-md text-xs leading-relaxed italic">
		{contact.travel_note}
	</p>
</section>
