<script lang="ts">
	import { onMount } from 'svelte';
	import {
		TabItem,
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

	rows = rows.map((row) => {
		return {
			...row.persona
		};
	});

	$: filteredItems = rows.filter((item) => item.rut.indexOf(searchTerm) !== -1);

	onMount(() => {
		baseUrl = `${window.location.origin}/dashboard`;
	});
</script>

{#if rows.length}
	<TableSearch striped placeholder="Buscar por rut" hoverable={true} bind:inputValue={searchTerm}>
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
					<TableBodyCell>{item?.rut}</TableBodyCell>
					<TableBodyCell>{`${item?.nombres} ${item?.apellidos}`}</TableBodyCell>
					<TableBodyCell>{item?.sexo}</TableBodyCell>
					<TableBodyCell
						>{new Date(
							new Date(item?.fecha_nacimiento).getTime() -
								new Date(item?.fecha_nacimiento).getTimezoneOffset() * -60000
						).toLocaleDateString('en-US')}</TableBodyCell
					>
					<TableBodyCell>{item?.telefono_personal}</TableBodyCell>
					<TableBodyCell>{item?.telefono_contacto ? item.telefono_contacto : 'N/A'}</TableBodyCell>
					<TableBodyCell>{item?.correo}</TableBodyCell>
					{#if cols.indexOf('Talla') > -1}
						<TableBodyCell>{item?.talla}</TableBodyCell>
					{/if}
				</TableBodyRow>
			{/each}
		</TableBody>
	</TableSearch>
{/if}
