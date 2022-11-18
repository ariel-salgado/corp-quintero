<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<nav>
	<div>
		<a href="/">
			<img
				src="/corp_logo.webp"
				width="265"
				height="112"
				alt="Corporación Municipal de Deportes Quintero"
			/>
		</a>
		<a href="https://www.muniquintero.cl/">
			<img width="110" height="100" src="/quintero.webp" alt="Municipalidad de Quintero" />
		</a>
	</div>

	<ul>
		<li><a href="/dashboard">Eventos Activos</a></li>
		|
		<li><a href="/dashboard/historicos">Eventos Historicos</a></li>
		|
		<li><a href="/dashboard/crear">Crear Evento</a></li>
	</ul>

	<form action="/logout" method="post">
		<Button text="Cerrar Sesión" />
	</form>
</nav>

<style scoped>
	nav {
		@apply w-full min-w-max flex justify-around place-items-center gap-8 px-4 py-2 bg-lightsecondary text-darkblue shadow;
	}

	div > a {
		@apply w-72;
	}

	a {
		@apply !w-fit;
	}

	ul {
		@apply flex items-center gap-6;
	}

	li {
		@apply hover:underline hover:underline-offset-2 decoration-1;
	}

	nav div {
		@apply inline-flex gap-8;
	}
</style>
