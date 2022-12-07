<script lang="ts">
	import { onMount } from 'svelte';
	import trpc from '$lib/trpc';
	import {
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		TableSearch,
		Modal,
		Button
	} from 'flowbite-svelte';

	export let tableTitle: string | undefined = undefined;
	export let tableDescription: string | undefined = undefined;
	export let cols: string[] = [];
	export let rows: any[] = [];

	let defaultModal: boolean = false;
	let responseModal: boolean = false;
	let selectedName: string = '';
	let selectedId: number = 0;
	let responseMsg: string = '';

	let baseUrl: string = '';
	let searchTerm: string = '';
	$: filteredItems = rows.filter(
		(item) => item.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);

	onMount(() => {
		baseUrl = `${window.location.origin}/dashboard`;
	});

	async function deleteEvento(id: number) {
		const query = await trpc().mutation('dashboard:delete', { id });
		if (!query) {
			responseMsg = 'No se pudo eliminar el evento, intente de nuevo';
		} else {
			responseMsg = 'Evento eliminado correctamente';
		}
		responseModal = true;
	}
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
								on:click={() => {
									defaultModal = true;
									selectedName = item?.nombre;
									selectedId = item?.id;
								}}>Eliminar</button
							>
						</div>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</TableSearch>
{:else}
	<section>
		<h1>No hay eventos registrados</h1>
	</section>
{/if}

<Modal title="Eliminar evento" bind:open={defaultModal} autoclose>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		Está apunto de eliminar el evento <strong>{selectedName}</strong>, ¿Está seguro?
	</p>
	<svelte:fragment slot="footer">
		<Button on:click={() => deleteEvento(selectedId)}>Eliminar</Button>
		<Button color="alternative">Cerrar</Button>
	</svelte:fragment>
</Modal>

<Modal title="Eliminar evento" bind:open={responseModal}>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		{responseMsg}
	</p>
	<svelte:fragment slot="footer">
		<Button>
			<a data-sveltekit-reload href={baseUrl}>Cerrar</a>
		</Button>
	</svelte:fragment>
</Modal>

<style scoped>
	section {
		@apply h-screen flex flex-col place-items-center justify-evenly text-center text-darkblue bg-lightsecondary;
	}

	h1 {
		@apply font-bold text-5xl;
	}

	div {
		@apply flex flex-row items-center gap-x-10;
	}

	div a,
	div button {
		@apply font-semibold hover:underline hover:underline-offset-2 decoration-2;
	}
</style>
