<script lang="ts">
	export let text: string;
	export let to: string | undefined = undefined;
	export let action: () => void | undefined = () => {};
</script>

<a href={to} on:click={action}>{text}</a>

<style scoped>
	a {
		@apply w-full min-w-max bg-darkblue hover:bg-lightblue text-lightsecondary text-xs lg:text-sm font-bold uppercase rounded-lg py-3 px-4 cursor-pointer transition-all duration-300;
	}
</style>
