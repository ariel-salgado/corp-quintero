<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { message } = data;
</script>

<svelte:head>
	<title>Corporación Municipal de Deportes Quintero</title>
	<meta name="description" content="" />
</svelte:head>

{#if message}
	<h1>{message}</h1>
{:else}
	<h1>Oops!</h1>
{/if}
