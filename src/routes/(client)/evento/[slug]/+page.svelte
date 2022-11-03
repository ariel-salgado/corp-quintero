<script lang="ts">
	import type { PageData } from './$types';
	import Button from '$lib/components/Button.svelte';
	import Badges from '$lib/components/Badges.svelte';
	import EventoDetails from '$src/lib/components/EventoDetails.svelte';
	import { categoria_eventoZod } from '$src/utils/zod/schema';
	export let data: PageData;
	const { evento } = data;

	const fecha_termino = new Date(evento!.fecha_termino);
	const hora_inicio = new Date(evento!.hora_inicio);
	const hora_termino = new Date(evento!.hora_termino);
</script>

<svelte:head>
	<title>Corporación Municipal de Deportes Quintero</title>
	<meta name="description" content="Eventos de la Corporación Municipal de Deportes Quintero" />
</svelte:head>

<section>
	<div>
		<img src={`/eventos/${evento?.id}.webp`} alt={evento?.nombre} />
		<div>
			<Badges categorias={evento?.categoria_evento} />
			<h1>{evento?.nombre}</h1>
			<EventoDetails
				{fecha_termino}
				{hora_inicio}
				{hora_termino}
				cupo={evento?.cupo}
				direccion={evento?.direccion}
			/>
			<p>{@html evento?.descripcion}</p>
			<p>{@html evento?.requisitos}</p>
			<div>
				{#if evento?.tipo === 'Abierto'}
					<Button to={`/inscripcion/${evento?.id}`} text="Inscribirse" />
				{/if}
				<Button to="/" text="Volver" />
			</div>
		</div>
	</div>
</section>

<style scoped>
	section {
		@apply min-w-[350px] p-6 lg:py-12 lg:px-16;
	}

	section > div {
		@apply w-full flex flex-col bg-lightsecondary rounded-lg shadow-lg;
	}

	img {
		@apply w-full h-80 object-cover rounded-t-lg;
	}

	section div > div {
		@apply p-6;
	}

	h1 {
		@apply text-2xl my-4;
	}

	p {
		@apply text-sm mb-4;
	}

	section div div div {
		@apply flex flex-col md:flex-row-reverse p-0 gap-y-4 md:gap-x-4 mt-6;
	}
</style>
