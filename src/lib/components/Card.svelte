<script lang="ts">
	import type { evento } from '@prisma/client';
	import Button from '$lib/components/Button.svelte';

	export let evento: evento;
</script>

<article>
	{#if evento.id > 5}
		<img src={`/not-found.webp`} alt={evento.nombre} />
	{:else}
		<img src={`/eventos/${evento.id}.webp`} alt={evento.nombre} />
	{/if}
	<div>
		<h1>{evento.nombre}</h1>
		<p>
			{evento.descripcion}
		</p>
		<Button to={`evento/${evento.id}`} text="Ver más" />
	</div>
</article>

<style lang="postcss" scoped>
	article {
		@apply w-full min-w-[300px] flex flex-col md:flex-row bg-lightsecondary rounded-lg hover:scale-105 duration-300 shadow-lg hover:shadow-xl cursor-pointer;
	}

	img {
		@apply w-full md:w-1/2 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg;
	}

	div {
		@apply w-full flex flex-col justify-between p-6 md:p-12;
	}

	h1 {
		@apply text-lg md:text-3xl font-medium;
	}

	p {
		@apply text-sm md:text-base py-4;
	}
</style>
