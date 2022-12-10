<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />
<main>
	<slot />
</main>
<Footer />

<style lang="postcss" scoped>
	main {
		@apply min-w-[375px];
	}
</style>
