<script lang="ts">
	import { fade } from 'svelte/transition';

	export let openOn: boolean;
	export let success: boolean = false;
	export let info: boolean = false;
	export let warning: boolean = false;
	export let error: boolean = false;
	export let title: string;
	export let body: string;

	let visible: boolean = true;

	setTimeout(() => {
		visible = false;
	}, 3000);
</script>

{#if visible}
	<div class:success class:info class:warning class:error open={openOn} transition:fade>
		<h1>{title}</h1>
		<p>{body}</p>
	</div>
{/if}

<style scoped>
	div {
		@apply max-w-3xl text-left text-lightsecondary rounded-lg px-6 py-4 mb-6;
	}

	h1 {
		@apply text-xl font-bold;
	}

	.success {
		@apply bg-darkgreen;
	}

	.info {
		@apply bg-darkblue;
	}

	.warning {
		@apply bg-darkyellow;
	}

	.error {
		@apply bg-darkorange;
	}
</style>
