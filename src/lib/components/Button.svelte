<script lang="ts">
	export let text: string;
	export let to: string | undefined = undefined;
	export let action: () => void | undefined = () => {};
</script>

<a class={`${$$restProps.class} btn`} href={to} on:click={action}>{text}</a>

<style scoped>
	.btn {
		@apply min-w-max bg-darkblue hover:bg-lightblue text-lightsecondary text-lg rounded-lg py-3 px-4 cursor-pointer transition-all duration-300;
	}
</style>
