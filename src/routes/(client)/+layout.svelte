<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />
<main>
	<slot />
</main>
<Footer />

<style scoped>
	main {
		@apply min-h-screen;
	}
</style>
