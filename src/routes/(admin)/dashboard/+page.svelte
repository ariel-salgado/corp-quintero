<script lang="ts">
	import Table from '$src/lib/components/dashboard/EventosTable.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { eventos } = data;

	const cols: string[] = ['Nombre', 'Fecha', 'Direccion', 'Cupos', 'Disponibles', 'Opciones'];
</script>

<section>
	<Table
		tableTitle="Eventos Activos"
		tableDescription="Eventos deportivos que se encuentran disponibles en la página principal de la corporación"
		{cols}
		rows={eventos}
	/>
</section>
