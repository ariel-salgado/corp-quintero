<script lang="ts">
	import type { evento } from '@prisma/client';
	import Card from '$lib/components/Card.svelte';

	export let eventos: evento[];
</script>

<section>
	{#each eventos as evento}
		<Card {evento} />
	{/each}
</section>

<style scoped>
	section {
		@apply grid p-6 lg:py-12 lg:px-16 gap-y-8 lg:gap-y-12;
	}
</style>
