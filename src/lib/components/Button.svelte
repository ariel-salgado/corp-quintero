<script lang="ts">
	import { goto } from '$app/navigation';

	export let text: string;
	export let to: string | undefined = undefined;
	export let action: () => void | undefined = () => {};

	function handleClick() {
		if (to) {
			goto(to);
		} else if (action) {
			action();
		}
	}
</script>

<button on:click={handleClick}>{text}</button>

<style scoped>
	button {
		@apply w-full min-w-max bg-darkblue hover:bg-lightblue text-lightsecondary text-xs lg:text-sm font-bold uppercase rounded-lg py-3 px-4 cursor-pointer transition-all duration-300;
	}
</style>
