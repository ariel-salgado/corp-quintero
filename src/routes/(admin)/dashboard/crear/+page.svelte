<script lang="ts">
	import type { ActionData } from './$types';
	import { evento_tipo } from '@prisma/client';
	import Input from '$lib/components/Input.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import Select from '$lib/components/Select.svelte';
	import Button from '$lib/components/Button.svelte';
	import Notification from '$lib/components/Notification.svelte';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Crear evento | Corporación Municipal de Deportes Quintero</title>
</svelte:head>

<section>
	{#if form?.response !== undefined}
		<aside>
			{#if form?.response}
				<Notification
					success
					openOn={true}
					title="¡Evento creado!"
					body="El evento ha sido creado correctamente. Ya puedes ver los detalles en la sección de eventos."
				/>
			{:else}
				<Notification
					error
					openOn={true}
					title="¡Ups!"
					body="Ha ocurrido un error al crear el evento. Intentalo nuevamente."
				/>
			{/if}
		</aside>
	{/if}
	<form method="post">
		<h1>Crear Evento</h1>

		<div>
			<Input label="Nombre" name="nombre" ph="Ingrese nombre del evento" />
			{#if form?.errors?.nombre}
				<span>* {form?.errors.nombre[0]}</span>
			{/if}
		</div>

		<div>
			<Select
				label="Tipo"
				name="tipo"
				ph="Seleccione tipo de evento"
				options={Object.values(evento_tipo)}
			/>
			{#if form?.errors?.tipo}
				<span>* {form?.errors.tipo[0]}</span>
			{/if}
		</div>

		<div>
			<Input number label="Cupo" name="cupo" ph="Ingrese cupo del evento" />
			{#if form?.errors?.cupo}
				<span>* {form?.errors.cupo[0]}</span>
			{/if}
		</div>

		<div>
			<Input
				date
				label="Fecha de inicio"
				name="fecha_inicio"
				ph="Ingrese la fecha de inicio del evento"
			/>
			{#if form?.errors?.fecha_inicio}
				<span>* {form?.errors.fecha_inicio[0]}</span>
			{/if}
		</div>

		<div>
			<Input
				date
				label="Fecha de término"
				name="fecha_termino"
				ph="Ingrese la fecha de termino del evento"
			/>
			{#if form?.errors?.fecha_termino}
				<span>* {form?.errors.fecha_termino[0]}</span>
			{/if}
		</div>

		<div>
			<Input
				time
				label="Hora de inicio"
				name="hora_inicio"
				ph="Ingrese la hora de inicio del evento"
			/>
			{#if form?.errors?.hora_inicio}
				<span>* {form?.errors.hora_inicio[0]}</span>
			{/if}
		</div>

		<div>
			<Input
				time
				label="Hora de término"
				name="hora_termino"
				ph="Ingrese la hora de término del evento"
			/>
			{#if form?.errors?.hora_termino}
				<span>* {form?.errors.hora_termino[0]}</span>
			{/if}
		</div>

		<div>
			<Input label="Dirección" name="direccion" ph="Ingrese la dirección del evento" />
			{#if form?.errors?.direccion}
				<span>* {form?.errors.direccion[0]}</span>
			{/if}
		</div>

		<div>
			<TextArea label="Descripción" name="descripcion" ph="Ingrese la descripción del evento" />
			{#if form?.errors?.descripcion}
				<span>* {form?.errors.descripcion[0]}</span>
			{/if}
		</div>

		<div>
			<TextArea label="Requisitos" name="requisitos" ph="Ingrese los requisitos del evento" />
			{#if form?.errors?.requisitos}
				<span>* {form?.errors.requisitos[0]}</span>
			{/if}
		</div>

		<div>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label>Poleras</label>
			<input type="checkbox" name="poleras" />
			{#if form?.errors?.poleras}
				<span>* {form?.errors.poleras[0]}</span>
			{/if}
		</div>

		<!--
		<div>
			<label>Foto</label>
			<input
				accept="image/png, image/jpeg, image/jpg, image/webp"
				type="file"
				name="foto"
				placeholder="Seleccione un foto para el evento"
			/>
			{#if form?.errors?.foto}
				<span>* {form?.errors.foto[0]}</span>
			{/if}
		</div>
		-->

		<div>
			<Button text="Volver" to="/dashboard" />
			<Button text="Crear Evento" />
		</div>
	</form>
</section>

<style scoped>
	section {
		@apply flex flex-col justify-center items-center p-6;
	}

	aside {
		@apply w-full max-w-3xl text-center;
	}

	h1 {
		@apply text-2xl font-bold;
	}

	label {
		@apply text-sm font-medium text-gray-700 mb-1;
	}

	form {
		@apply w-full max-w-3xl flex flex-col gap-y-3 bg-lightsecondary rounded-lg shadow-lg p-6;
	}

	form div {
		@apply w-full flex flex-col;
	}

	form div:last-child {
		@apply flex flex-col-reverse gap-y-4 md:flex-row md:gap-x-4 mt-4;
	}

	span {
		@apply text-neutralorange text-xs italic;
	}
</style>
