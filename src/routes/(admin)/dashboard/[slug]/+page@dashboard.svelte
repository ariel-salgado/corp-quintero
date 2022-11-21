<script lang="ts">
	import type { PageData } from './$types';
	import { persona_talla } from '@prisma/client';
	import Button from '$lib/components/Button.svelte';
	import Badges from '$lib/components/Badges.svelte';
	import EventoDetails from '$lib/components/EventoDetails.svelte';
	import Table from '$src/lib/components/dashboard/PersonasTable.svelte';

	export let data: PageData;
	const { evento } = data;

	let cols = [
		'Rut',
		'Nombre Completo',
		'Sexo',
		'Fecha de nacimiento',
		'Teléfono personal',
		'Teléfono contacto',
		'Email'
	];

	if (evento.poleras) cols = [...cols, 'Talla'];

	const fecha_termino = new Date(evento!.fecha_termino);
	const hora_inicio = new Date(evento!.hora_inicio);
	const hora_termino = new Date(evento!.hora_termino);
</script>

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
				<Button to="/dashboard" text="Volver" />
			</div>
		</div>
	</div>

	<div>
		<h1>Total inscritos: {evento.inscribe_evento.length}</h1>
		<div>
			<div>
				<h1>Cantidad de poleras:</h1>
				{#each Object.values(persona_talla) as talla}
					<p>
						{talla}: {evento.inscribe_evento.filter((inscrito) => inscrito.persona.talla === talla)
							.length}
					</p>
				{/each}
			</div>
			<div>
				<h1>Cantidad de inscritos por categoría:</h1>
				{#if evento.categoria_evento.length > 0}
					{#each evento.categoria_evento as e}
						<p>
							{e.categoria}: {evento.inscribe_evento.filter(
								(inscrito) => inscrito.categoria === e.categoria
							).length}
						</p>
					{/each}
				{:else}
					<p>Sin categoría: {evento.inscribe_evento.length}</p>
				{/if}
			</div>
		</div>
	</div>

	<div>
		<Table {cols} rows={evento.inscribe_evento} />
	</div>
</section>

<style scoped>
	section {
		@apply p-6;
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
