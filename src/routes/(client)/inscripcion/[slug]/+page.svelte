<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { persona_sexo } from '@prisma/client';
	import Input from '$src/lib/components/Form/Input.svelte';
	import Select from '$src/lib/components/Form/Select.svelte';
	import Date from '$src/lib/components/Form/Date.svelte';
	import Button from '$lib/components/Button.svelte';

	export let data: PageData;
	const { categorias } = data;

	if (!categorias) goto('/');
</script>

<svelte:head>
	<title>Inscripción {categorias.nombre} | Corporación Municipal de Deportes Quintero</title>
</svelte:head>

<section>
	<form method="post">
		<h1>{`Inscripción ${categorias.nombre}`}</h1>

		<div>
			<Select
				label="Categoría"
				name="categoria"
				ph="Selecciona una categoría"
				options={categorias.categoria_evento.map((evento) => {
					return evento.categoria;
				})}
			/>
		</div>

		<div>
			<Input label="RUT" name="rut" ph="Ingrese su RUT" />
		</div>

		<div>
			<Input label="Nombres" name="nombres" ph="Ingrese sus nombres" />
		</div>

		<div>
			<Input label="Apellidos" name="apellidos" ph="Ingrese sus apellidos" />
		</div>

		<div>
			<Select
				label="Sexo"
				name="sexo"
				ph="Seleccione su sexo"
				options={Object.values(persona_sexo)}
			/>
		</div>

		<div>
			<Date
				label="Fecha de nacimiento"
				name="fecha_nacimiento"
				ph="Ingrese su fecha de nacimiento"
			/>
		</div>

		<div>
			<Input
				label="Teléfono personal"
				name="telefono_personal"
				ph="Ingrese su teléfono de personal"
			/>
		</div>

		<div>
			<Input
				label="Teléfono contacto"
				name="telefono_contacto"
				ph="Ingrese su teléfono de contacto"
			/>
		</div>

		<div>
			<Input label="Correo electrónico" name="correo" ph="Ingrese su correo electrónico" />
		</div>

		<div>
			<Input label="Dirección" name="direccion" ph="Ingrese su dirección" />
		</div>

		<div>
			<Button text="Volver" to={`/evento/${categorias.id}`} />
			<Button text="Inscribirse" />
		</div>
	</form>
</section>

<style scoped>
	section {
		@apply flex justify-center p-6 lg:py-12;
	}
	form {
		@apply w-full max-w-3xl flex flex-col gap-y-3 bg-lightsecondary rounded-lg shadow-lg p-6;
	}

	form div:last-child {
		@apply flex flex-col-reverse gap-y-4 md:flex-row md:gap-x-4 mt-4;
	}

	h1 {
		@apply text-2xl font-bold;
	}
</style>
