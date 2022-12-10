<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />
<main>
	<h1>Página no encontrada</h1>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</main>
<Footer />

<style lang="postcss" scoped>
	main {
		@apply h-screen flex flex-col place-items-center justify-evenly text-center text-darkblue bg-lightsecondary rounded-lg shadow-md gap-6 p-6 m-6;
	}

	h1 {
		@apply font-bold text-5xl;
	}
</style>
