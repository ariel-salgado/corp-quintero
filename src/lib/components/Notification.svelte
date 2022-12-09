<script lang="ts">
	import { fade } from 'svelte/transition';
	export let success: boolean = false;
	export let info: boolean = false;
	export let warning: boolean = false;
	export let error: boolean = false;
	export let title: string;
	export let body: string;

	let visible: Boolean = true;
	let nodeRef: Node;

	setTimeout(() => {
		try {
			nodeRef.parentNode?.removeChild(nodeRef);
		} catch {}
	}, 3000);

	setTimeout(() => {
		visible = false;
	}, 2500);
</script>

<section>
	{#if visible}
		<div class:success class:info class:warning class:error bind:this={nodeRef} transition:fade>
			<h1>{title}</h1>
			<p>{body}</p>
		</div>
	{/if}
</section>

<style scoped>
	section {
		@apply relative w-full;
	}
	div {
		@apply w-full text-left text-lightsecondary rounded-lg px-6 py-4 mb-6 absolute;
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
