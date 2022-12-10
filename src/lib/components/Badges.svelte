<script lang="ts">
	export let categorias: { categoria: string }[] | undefined;
</script>

{#if categorias?.length}
	<div>
		{#each categorias as evento}
			<span>{evento.categoria}</span>
		{/each}
	</div>
{:else}
	<div>
		<span>Sin Categoría</span>
	</div>
{/if}

<style lang="postcss" scoped>
	div {
		@apply flex flex-row gap-x-4;
	}

	span {
		@apply bg-darkgreen p-2 text-lightsecondary rounded-lg text-xs lg:text-sm font-bold uppercase;
	}
</style>
