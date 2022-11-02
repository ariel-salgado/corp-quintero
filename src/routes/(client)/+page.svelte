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

<main>
	<Eventos {eventos} />
</main>
