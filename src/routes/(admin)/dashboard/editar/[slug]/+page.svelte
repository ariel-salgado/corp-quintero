<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { evento_tipo } from '@prisma/client';
	import Input from '$lib/components/Input.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import Select from '$lib/components/Select.svelte';
	import Button from '$lib/components/Button.svelte';
	import Notification from '$lib/components/Notification.svelte';

	export let form: ActionData;
	export let data: PageData;
	const { evento } = data;

	let trigger = {};

	function restart() {
		trigger = {};
	}

	function convertDate(fecha: Date) {
		const [dia, mes, ano] = new Date(
			new Date(
				new Date(evento.fecha_inicio).getTime() -
					new Date(evento.fecha_inicio).getTimezoneOffset() * -60000
			)
		)
			.toLocaleDateString('es-CL')
			.split('-');
		return [ano, mes, dia];
	}

	function convertTime(hora: Date, fecha: Date) {
		const [horas, minutos] = new Date(
			new Date(hora).getTime() - new Date(fecha).getTimezoneOffset() * -60000
		)
			.toLocaleTimeString('es-CL', {
				hour: '2-digit',
				minute: '2-digit'
			})
			.split(':');
		return [horas, minutos];
	}

	console.log(convertDate(evento.fecha_inicio));

	const [ano_inicio, mes_inicio, dia_inicio] = convertDate(evento.fecha_inicio);
	const [ano_termino, mes_termino, dia_termino] = convertDate(evento.fecha_termino);

	const [hora_inicio, minuto_inicio] = convertTime(evento.hora_inicio, evento.fecha_inicio);
	const [hora_termino, minuto_termino] = convertTime(evento.hora_termino, evento.fecha_termino);

	const categorias = evento.categoria_evento
		.map((evento) => evento.categoria)
		.toString()
		.replace(',', ', ');
</script>

<svelte:head>
	<title>Editar evento | Corporación Municipal de Deportes Quintero</title>
</svelte:head>

<section>
	{#if form?.response !== undefined}
		<aside>
			{#if form?.response}
				{#key trigger}
					<Notification
						success
						title="¡Evento actualizado!"
						body="El evento ha sido actualizado correctamente. Ya puedes ver los detalles en la sección de eventos."
					/>
				{/key}
			{:else}
				{#key trigger}
					<Notification
						error
						title="¡Ups!"
						body="Ha ocurrido un error al actualizar el evento. Intentalo nuevamente."
					/>
				{/key}
			{/if}
		</aside>
	{/if}
	<form method="post">
		<h1>Editar Evento</h1>

		<div>
			<Input label="Nombre" name="nombre" ph="Ingrese nombre del evento" value={evento.nombre} />
			{#if form?.errors?.nombre}
				<span>* {form?.errors.nombre[0]}</span>
			{/if}
		</div>

		<div>
			<Select
				label="Tipo"
				name="tipo"
				ph="Seleccione tipo de evento"
				bind:value={evento.tipo}
				options={Object.values(evento_tipo)}
			/>
			{#if form?.errors?.tipo}
				<span>* {form?.errors.tipo[0]}</span>
			{/if}
		</div>

		<div>
			<Input
				label="Categoría"
				name="categoria"
				ph="Ingrese categoría del evento"
				value={categorias}
			/>
			{#if form?.errors?.categoria}
				<span>* {form?.errors.categoria[0]}</span>
			{/if}
		</div>

		<div>
			<Input
				number
				label="Cupo"
				name="cupo"
				ph="Ingrese cupo del evento"
				value={String(evento.cupo)}
			/>
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
				value={`${ano_inicio}-${mes_inicio}-${dia_inicio}`}
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
				value={`${ano_termino}-${mes_termino}-${dia_termino}`}
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
				value={`${hora_inicio}:${minuto_inicio}`}
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
				value={`${hora_termino}:${minuto_termino}`}
			/>
			{#if form?.errors?.hora_termino}
				<span>* {form?.errors.hora_termino[0]}</span>
			{/if}
		</div>

		<div>
			<Input
				label="Dirección"
				name="direccion"
				ph="Ingrese la dirección del evento"
				value={evento.direccion}
			/>
			{#if form?.errors?.direccion}
				<span>* {form?.errors.direccion[0]}</span>
			{/if}
		</div>

		<div>
			<TextArea
				label="Descripción"
				name="descripcion"
				ph="Ingrese la descripción del evento"
				value={evento.descripcion}
			/>
			{#if form?.errors?.descripcion}
				<span>* {form?.errors.descripcion[0]}</span>
			{/if}
		</div>

		<div>
			<TextArea
				label="Requisitos"
				name="requisitos"
				ph="Ingrese los requisitos del evento"
				value={evento.requisitos}
			/>
			{#if form?.errors?.requisitos}
				<span>* {form?.errors.requisitos[0]}</span>
			{/if}
		</div>

		<div>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label>Poleras</label>
			<input type="checkbox" name="poleras" checked={evento.poleras} />
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
			<Button text="Actualizar Evento" />
		</div>
	</form>
</section>

<style lang="postcss" scoped>
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
