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
	{#if evento.id > 5}
		<img src={`/not-found.webp`} alt={evento.nombre} />
	{:else}
		<img src={`/eventos/${evento?.id}.webp`} alt={evento?.nombre} />
	{/if}

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
		<br />
		<Button to={`/dashboard/editar/${evento.id}`} text="Editar" />
		<br />
		<Button to="/dashboard" text="Volver" />
	</div>
</section>

<section>
	<div>
		<h1>Total inscritos: {evento.inscribe_evento.length}</h1>
		<aside>
			{#if evento.poleras}
				<div>
					<h2>Cantidad de poleras:</h2>
					<dl>
						{#each Object.values(persona_talla) as talla, i}
							<dt class={i % 2 === 0 ? 'odd' : 'even'}>
								{talla}:
							</dt>
							<dd class={i % 2 === 0 ? 'odd' : 'even'}>
								{evento.inscribe_evento.filter((inscrito) => inscrito.persona.talla === talla)
									.length}
							</dd>
						{/each}
					</dl>
				</div>
			{/if}
			<div>
				<h2>Cantidad de inscritos por categoría:</h2>
				{#if evento.categoria_evento.length > 0}
					<dl>
						{#each evento.categoria_evento as e, i}
							<dt class={i % 2 === 0 ? 'odd' : 'even'}>
								{e.categoria}:
							</dt>
							<dd class={i % 2 === 0 ? 'odd' : 'even'}>
								{evento.inscribe_evento.filter((inscrito) => inscrito.categoria === e.categoria)
									.length}
							</dd>
						{/each}
					</dl>
				{:else}
					<p>Sin categoría: {evento.inscribe_evento.length}</p>
				{/if}
			</div>
		</aside>

		<section>
			<Table {cols} rows={evento.inscribe_evento} />
		</section>
	</div>
</section>

<style lang="postcss" scoped>
	section {
		@apply p-6;
	}

	section > div {
		@apply w-full flex flex-col bg-lightsecondary rounded-lg shadow-lg p-6;
	}

	aside {
		@apply flex justify-evenly my-4;
	}

	dl {
		@apply w-full flex flex-wrap text-center border;
	}

	dt,
	dd {
		@apply w-1/2 py-1;
	}

	.odd {
		@apply bg-lightprimary;
	}

	.even {
		@apply bg-lightsecondary;
	}

	h1 {
		@apply text-2xl my-4;
	}

	h2 {
		@apply text-xl mb-4;
	}

	p {
		@apply text-sm mb-4;
	}

	img {
		@apply w-full h-80 object-cover rounded-t-lg;
	}
</style>
