<script lang="ts">
	export let label: string;
	export let name: string | undefined = undefined;
	export let ph: string | undefined = undefined;
	export let value: string | null = null;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<div>
	<label>{label}</label>
	<textarea on:input {name} placeholder={ph} bind:value cols="5" />
</div>

<style lang="postcss" scoped>
	div {
		@apply w-full grid text-left;
	}

	label {
		@apply text-sm font-medium text-gray-700 mb-1;
	}

	textarea {
		@apply h-20 bg-lightsecondary text-darksecondary text-xs lg:text-sm rounded-lg border border-darkblue focus:outline-none p-2;
	}
</style>
