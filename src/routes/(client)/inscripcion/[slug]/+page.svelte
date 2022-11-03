<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import Input from '$src/lib/components/Form/Input.svelte';
	import Select from '$src/lib/components/Form/Select.svelte';
	import Date from '$src/lib/components/Form/Date.svelte';
	import { persona_sexo } from '@prisma/client';

	export let data: PageData;
	const { categorias } = data;

	if (!categorias) goto('/');
</script>

<svelte:head>
	<title>Inscripción | Corporación Municipal de Deportes Quintero</title>
</svelte:head>

<form method="post">
	<Select
		label="Categoría"
		name="categoria"
		ph="Selecciona una categoría"
		options={categorias.categoria_evento.map((evento) => {
			return evento.categoria;
		})}
	/>

	<Input label="RUT" name="rut" ph="Ingrese su RUT" />

	<Input label="Nombres" name="nombres" ph="Ingrese sus nombres" />

	<Input label="Apellidos" name="apellidos" ph="Ingrese sus apellidos" />

	<Select label="Sexo" name="sexo" ph="Seleccione su sexo" options={Object.values(persona_sexo)} />

	<Date label="Fecha de nacimiento" name="fecha_nacimiento" ph="Ingrese su fecha de nacimiento" />

	<Input label="Teléfono personal" name="telefono_personal" ph="Ingrese su teléfono de personal" />

	<Input label="Teléfono contacto" name="telefono_contacto" ph="Ingrese su teléfono de contacto" />

	<Input label="Correo electrónico" name="correo" ph="Ingrese su correo electrónico" />

	<Input label="Dirección" name="direccion" ph="Ingrese su dirección" />
</form>
