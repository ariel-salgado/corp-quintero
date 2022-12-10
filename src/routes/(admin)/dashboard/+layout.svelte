<script lang="ts">
	import Navbar from '$src/lib/components/dashboard/Navbar.svelte';
</script>

<Navbar />
<main>
	<slot />
</main>

<style lang="postcss" scoped>
	main {
		@apply h-screen min-w-full p-6;
	}
</style>
