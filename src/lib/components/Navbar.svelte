<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<nav class="navbar">
	<a class="col-start-1 lg:col-start-2" href="/">
		<img
			class="cursor-pointer"
			src="/corp_logo.webp"
			width="350"
			alt="Corporación Municipal de Deportes Quintero"
		/>
	</a>
	<Button class="justify-self-end lg:justify-self-center" to="/login" text="Iniciar Sesión" />
</nav>

<style scoped>
	.navbar {
		@apply w-full inline-grid grid-cols-2 lg:grid-cols-3 place-items-center gap-4 px-14 lg:px-0 bg-lightsecondary text-darkblue shadow-md;
	}
</style>
