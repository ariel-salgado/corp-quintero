<script lang="ts">
	export let label: string;
	export let name: string | undefined = undefined;
	export let ph: string | undefined = undefined;
	export let value: string | null = null;
	export let number: boolean = false;
	export let date: boolean = false;
	export let password: boolean = false;

	const numberInputInvalidChars = ['-', '+', 'e', 'E'];

	function typeAction(node: HTMLInputElement) {
		if (number) {
			node.type = 'number';
		} else if (date) {
			node.type = 'date';
		} else if (password) {
			node.type = 'password';
		} else {
			node.type = 'text';
		}
	}
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<div>
	<label>{label}</label>
	<input
		on:input
		use:typeAction
		{name}
		placeholder={ph}
		bind:value
		on:keypress={(e) => {
			if (numberInputInvalidChars.includes(e.key) && number) {
				e.preventDefault();
			}
		}}
	/>
</div>

<style scoped>
	div {
		@apply w-full grid text-left;
	}

	label {
		@apply text-sm font-medium text-gray-700 mb-1;
	}

	input {
		@apply h-[34px] bg-lightsecondary text-darksecondary text-xs lg:text-sm rounded-lg border border-darkblue focus:outline-none p-2;
	}
</style>
