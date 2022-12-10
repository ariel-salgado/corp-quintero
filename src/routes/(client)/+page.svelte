<script lang="ts">
	import Eventos from '$lib/components/Eventos.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { eventos } = data;
</script>

<svelte:head>
	<title>Corporación Municipal de Deportes Quintero</title>
	<meta name="description" content="Eventos de la Corporación Municipal de Deportes Quintero" />
</svelte:head>

{#if eventos.length}
	<Eventos {eventos} />
{:else}
	<section>
		<h1>No hay eventos registrados</h1>
	</section>
{/if}

<style lang="postcss" scoped>
	section {
		@apply h-screen flex flex-col place-items-center justify-evenly text-center text-darkblue bg-lightsecondary;
	}

	h1 {
		@apply font-bold text-5xl;
	}
</style>
