<script lang="ts">
	import type { evento } from '@prisma/client';
	import Card from '$lib/components/Card.svelte';
	export let eventos: evento[];
</script>

<section class="grid py-12 px-16 gap-y-12">
	{#each eventos as evento}
		<Card {evento} />
	{/each}
</section>
