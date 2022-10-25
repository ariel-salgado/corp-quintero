<script lang="ts">
	export let label: string;
	export let ph: string | undefined = undefined;
	export let value: string | null = null;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<div>
	<label>{label}</label>
	<input placeholder={ph} bind:value />
</div>

<style scoped>
	div {
		@apply w-full grid gap-2 text-left;
	}

	label {
		@apply text-sm font-medium text-gray-700;
	}

	input {
		@apply bg-lightsecondary text-darksecondary text-xs lg:text-sm rounded-lg border border-darkblue focus:outline-none py-2 px-4;
	}
</style>
