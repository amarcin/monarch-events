<script lang="ts">
	import './layout.css';
	import { page } from '$app/state';

	let { children } = $props();

	const nav = [
		{ href: '/', label: 'home' },
		{ href: '/menus', label: 'menus' },
		{ href: '/events', label: 'upcoming events' },
		{ href: '/about', label: 'about' },
		{ href: '/contact', label: 'contact' }
	];
</script>

<svelte:head>
	<title>Monarch Events — curated private dining with Ella and Nina</title>
</svelte:head>

<div class="mx-auto flex min-h-screen max-w-5xl flex-col px-6">
	<header class="flex flex-col items-center py-10 text-center">
		<a href="/" class="no-underline">
			<h1 class="font-serif text-5xl tracking-wide md:text-6xl">Monarch Events</h1>
		</a>
		<p class="text-terracotta/80 mt-2 text-sm tracking-[0.2em] uppercase">
			curated private dining · dallas, tx
		</p>
		<nav class="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm tracking-wide">
			{#each nav as item (item.href)}
				<a
					href={item.href}
					class="no-underline"
					class:font-medium={page.url.pathname === item.href}
				>
					{item.label}
				</a>
			{/each}
		</nav>
		<hr class="hairline mt-10 w-24" />
	</header>

	<main class="flex-1 pb-16">
		{@render children()}
	</main>

	<footer class="border-terracotta/20 mt-auto border-t pt-8 pb-12 text-center text-sm">
		<p class="font-serif text-terracotta text-2xl">Monarch Events</p>
		<p class="mt-3 text-ink/70">curated private dining with Ella and Nina</p>
		<p class="mt-4 text-ink/70">
			<a href="mailto:monarchevents@gmailgroups.com">monarchevents@gmailgroups.com</a>
			<span class="mx-2">·</span>
			<a href="tel:+15108378746">(510) 837-8746</a>
		</p>
		<p class="text-ink/40 mt-6 text-xs tracking-widest uppercase">
			© {new Date().getFullYear()} Monarch Events · Dallas, TX
		</p>
	</footer>
</div>
