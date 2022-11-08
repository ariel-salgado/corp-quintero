<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { persona_sexo, persona_talla } from '@prisma/client';
	import Input from '$src/lib/components/Form/Input.svelte';
	import Select from '$src/lib/components/Form/Select.svelte';
	import Button from '$lib/components/Button.svelte';
	import Notification from '$src/lib/components/Notification.svelte';

	export let data: PageData;
	export let form: ActionData;
	const { evento } = data;
</script>

<svelte:head>
	<title>Inscripción {evento.nombre} | Corporación Municipal de Deportes Quintero</title>
</svelte:head>

<section>
	{#if form?.response !== undefined}
		<aside>
			{#if form?.response}
				<Notification
					success
					openOn={true}
					title="¡Gracias por inscribirte!"
					body="Te hemos enviado un correo con los detalles de tu inscripción."
				/>
			{:else}
				<Notification
					error
					openOn={true}
					title="¡Ups!"
					body="Ha ocurrido un error al inscribirte."
				/>
			{/if}
		</aside>
	{/if}
	<form
		method="post"
		use:enhance={() => {
			return async ({ result }) => {
				invalidateAll();
				await applyAction(result);
			};
		}}
	>
		<h1>{`Inscripción ${evento.nombre}`}</h1>

		<div>
			<Select
				label="Categoría"
				name="categoria"
				ph="Selecciona una categoría"
				options={evento.categoria_evento.map((evento) => {
					return evento.categoria;
				})}
			/>
			{#if form?.errors?.categoria}
				<span>* {form?.errors.categoria[0]}</span>
			{/if}
		</div>

		<div>
			<Input label="RUT" name="rut" ph="Ingrese su RUT" />
			{#if form?.errors?.rut}
				<span>* {form?.errors.rut[0]}</span>
			{/if}
		</div>

		<div>
			<Input label="Nombres" name="nombres" ph="Ingrese sus nombres" />
			{#if form?.errors?.nombres}
				<span>* {form?.errors.nombres[0]}</span>
			{/if}
		</div>

		<div>
			<Input label="Apellidos" name="apellidos" ph="Ingrese sus apellidos" />
			{#if form?.errors?.apellidos}
				<span>* {form?.errors.apellidos[0]}</span>
			{/if}
		</div>

		<div>
			<Select
				label="Sexo"
				name="sexo"
				ph="Seleccione su sexo"
				options={Object.values(persona_sexo)}
			/>
			{#if form?.errors?.sexo}
				<span>* {form?.errors.sexo[0]}</span>
			{/if}
		</div>

		<div>
			<Input
				date
				label="Fecha de nacimiento"
				name="fecha_nacimiento"
				ph="Ingrese su fecha de nacimiento"
			/>
			{#if form?.errors?.fecha_nacimiento}
				<span>* {form?.errors.fecha_nacimiento[0]}</span>
			{/if}
		</div>

		<div>
			<Input
				number
				label="Teléfono personal"
				name="telefono_personal"
				ph="Ingrese su teléfono de personal"
			/>
			{#if form?.errors?.telefono_personal}
				<span>* {form?.errors.telefono_personal[0]}</span>
			{/if}
		</div>

		<div>
			<Input
				number
				label="Teléfono contacto"
				name="telefono_contacto"
				ph="Ingrese su teléfono de contacto"
			/>
			{#if form?.errors?.telefono_contacto}
				<span>* {form?.errors.telefono_contacto[0]}</span>
			{/if}
		</div>

		<div>
			<Input label="Correo electrónico" name="correo" ph="Ingrese su correo electrónico" />
			{#if form?.errors?.correo}
				<span>* {form?.errors.correo[0]}</span>
			{/if}
		</div>

		<div>
			<Input label="Dirección" name="direccion" ph="Ingrese su dirección" />
			{#if form?.errors?.direccion}
				<span>* {form?.errors.direccion[0]}</span>
			{/if}
		</div>

		{#if evento.poleras}
			<div>
				<Select
					label="Talla de polera"
					name="talla"
					ph="Seleccione su talla de polera"
					options={Object.values(persona_talla)}
				/>
				{#if form?.errors?.talla}
					<span>* {form?.errors.talla[0]}</span>
				{/if}
			</div>
		{/if}

		<div>
			<Button text="Volver" to={`/evento/${evento.id}`} />
			<Button text="Inscribirse" />
		</div>
	</form>
</section>

<style scoped>
	section {
		@apply flex flex-col justify-center items-center p-6 lg:py-12;
	}

	aside {
		@apply w-full max-w-3xl text-center;
	}

	h1 {
		@apply text-2xl font-bold;
	}
	form {
		@apply w-full max-w-3xl flex flex-col gap-y-3 bg-lightsecondary rounded-lg shadow-lg p-6;
	}

	form div:last-child {
		@apply flex flex-col-reverse gap-y-4 md:flex-row md:gap-x-4 mt-4;
	}

	span {
		@apply text-neutralorange text-xs italic;
	}
</style>
