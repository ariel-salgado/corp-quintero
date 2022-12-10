<script lang="ts">
	export let text: string;
	export let to: string | undefined = undefined;
	export let action: () => void | undefined = () => {};
</script>

{#if to}
	<a href={to}>{text}</a>
{:else}
	<button on:click={action}>{text}</button>
{/if}

<style lang="postcss" scoped>
	button,
	a {
		@apply w-full min-w-max bg-darkblue hover:bg-lightblue text-lightsecondary text-center text-xs lg:text-sm font-bold uppercase rounded-lg py-3 px-4 cursor-pointer transition-all duration-300;
	}
</style>
