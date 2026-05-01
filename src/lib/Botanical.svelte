<script lang="ts">
	let { class: className = '', variant = 'branch' }: { class?: string; variant?: 'branch' | 'sprig' | 'spread' } = $props();
</script>

{#if variant === 'branch'}
	<svg
		class={className}
		viewBox="0 0 240 120"
		fill="none"
		stroke="currentColor"
		stroke-width="1.2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M10 60 C 60 20, 120 20, 230 40" />
		<path d="M40 52 q 10 -14 22 -10 q -4 12 -22 10 z" />
		<path d="M78 44 q 10 -14 22 -10 q -4 12 -22 10 z" />
		<path d="M118 38 q 10 -14 22 -10 q -4 12 -22 10 z" />
		<path d="M158 34 q 10 -12 22 -8 q -4 12 -22 8 z" />
		<path d="M196 38 q 10 -12 22 -8 q -4 12 -22 8 z" />
		<path d="M55 60 q -8 10 -6 22 q 14 -4 14 -20 z" />
		<path d="M95 56 q -8 10 -6 22 q 14 -4 14 -20 z" />
		<path d="M135 50 q -8 10 -6 22 q 14 -4 14 -20 z" />
		<path d="M175 46 q -8 10 -6 22 q 14 -4 14 -20 z" />
	</svg>
{:else if variant === 'sprig'}
	<svg
		class={className}
		viewBox="0 0 80 160"
		fill="none"
		stroke="currentColor"
		stroke-width="1.2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M40 10 C 30 50, 50 90, 40 150" />
		<path d="M40 40 q -16 -4 -24 8 q 12 10 24 -8 z" />
		<path d="M40 40 q 16 -4 24 8 q -12 10 -24 -8 z" />
		<path d="M40 70 q -16 -4 -24 8 q 12 10 24 -8 z" />
		<path d="M40 70 q 16 -4 24 8 q -12 10 -24 -8 z" />
		<path d="M40 100 q -16 -4 -24 8 q 12 10 24 -8 z" />
		<path d="M40 100 q 16 -4 24 8 q -12 10 -24 -8 z" />
		<path d="M40 130 q -14 -4 -20 6 q 10 8 20 -6 z" />
		<path d="M40 130 q 14 -4 20 6 q -10 8 -20 -6 z" />
	</svg>
{:else}
	<svg
		class={className}
		viewBox="0 0 720 180"
		fill="none"
		stroke="currentColor"
		stroke-width="1.1"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M10 160 q 60 -30 110 -20 q 50 10 80 -20 q 30 -30 70 -10 q 40 20 80 -10 q 40 -30 90 -5 q 50 25 100 -10 q 40 -28 80 -10" />
		<ellipse cx="160" cy="135" rx="22" ry="10" transform="rotate(-20 160 135)" />
		<circle cx="250" cy="120" r="3" />
		<circle cx="258" cy="126" r="3" />
		<circle cx="244" cy="128" r="3" />
		<circle cx="252" cy="134" r="3" />
		<path d="M320 130 q -6 -22 10 -34 q 10 14 -10 34 z" />
		<path d="M340 130 q 6 -22 -10 -34 q -10 14 10 34 z" />
		<path d="M420 130 c 0 -30 30 -45 50 -40 c -5 25 -25 42 -50 40 z" />
		<circle cx="520" cy="130" r="10" />
		<path d="M520 120 v -14" />
		<path d="M560 140 q 30 -10 50 -2" />
		<path d="M610 140 q 20 -14 42 -8" />
		<path d="M660 110 l 10 20 l 12 -16" />
	</svg>
{/if}
