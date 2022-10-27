<script lang="ts">
	import trpc from '$lib/trpc';

	const load = async () => {
		const message = await trpc().query('login', { nombre: 'foo', contrasena: 'bar' });
		return message;
	};
</script>

<svelte:head>
	<title>Corporación Municipal de Deportes Quintero</title>
</svelte:head>

{#await load()}
	Loading...
{:then value}
	{value}
{:catch error}
	{error}
{/await}
