<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
</script>

<svelte:head>
	<title>Ingreso | Corporación Municipal de Deportes Quintero</title>
</svelte:head>

<aside />
<section>
	<a href="/">
		<img src="corp_logo.webp" width="350" alt="Corporación Municipal de Deportes Quintero" />
	</a>

	<form method="post">
		<Input name="username" label="Usuario" ph="Ingrese Usuario" />
		<Input name="password" label="Contraseña" ph="Ingrese Contraseña" />
		<Button text="Ingresar" />
	</form>
</section>

<style scoped>
	aside {
		@apply hidden lg:block bg-darkblue w-full h-screen;
	}

	section {
		@apply w-full grid place-items-center gap-10 p-16;
	}

	section form {
		@apply w-full grid place-items-center text-center gap-8;
	}
</style>
