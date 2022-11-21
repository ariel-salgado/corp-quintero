<script lang="ts">
	import { onMount } from 'svelte';
	import {
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		TableSearch
	} from 'flowbite-svelte';

	export let tableTitle: string | undefined = undefined;
	export let tableDescription: string | undefined = undefined;
	export let cols: string[] = [];
	export let rows: any[] = [];

	let baseUrl: string = '';
	let searchTerm: string = '';
	$: filteredItems = rows.filter(
		(item) => item.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);

	onMount(() => {
		baseUrl = `${window.location.origin}/dashboard`;
	});
</script>

{#if rows.length}
	<TableSearch
		striped
		placeholder="Buscar por nombre"
		hoverable={true}
		bind:inputValue={searchTerm}
	>
		{#if tableTitle}
			<caption
				class="p-5 text-2xl font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
			>
				{tableTitle}
				{#if tableDescription}
					<p class="mt-1 text-sm font-normal text-gray-500">
						{tableDescription}
					</p>
				{/if}
			</caption>
		{/if}

		<TableHead theadClass="!bg-darkblue !text-white">
			{#each cols as col}
				<TableHeadCell>{col}</TableHeadCell>
			{/each}
		</TableHead>
		<TableBody class="divide-y">
			{#each filteredItems as item}
				<TableBodyRow>
					<TableBodyCell>{item?.nombre}</TableBodyCell>
					<TableBodyCell>{new Date(item?.fecha_termino).toLocaleDateString()}</TableBodyCell>
					<TableBodyCell>{item?.direccion}</TableBodyCell>
					<TableBodyCell>{item?.cupo}</TableBodyCell>
					<TableBodyCell>{item?.cupos_disponibles}</TableBodyCell>
					<TableBodyCell>
						<div>
							<a class="text-neutralgreen hover:text-lightgreen" href={`${baseUrl}/${item?.id}`}
								>Ver</a
							>
							<a
								class="text-neutralyellow hover:text-lightyellow"
								href={`${baseUrl}/editar/${item?.id}`}>Editar</a
							>
							<button
								class="text-neutralorange hover:text-lightorange"
								on:click={() => alert('deleted')}>Eliminar</button
							>
						</div>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</TableSearch>
{/if}

<style scoped>
	div {
		@apply flex flex-row items-center gap-x-10;
	}

	a,
	button {
		@apply font-semibold hover:underline hover:underline-offset-2 decoration-2;
	}
</style>
