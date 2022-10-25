<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';

	let user: string | null = null;
	let password: string | null = null;

	function login() {
		alert(`user: ${user}, password: ${password}`);
	}
</script>

<svelte:head>
	<title>Ingreso | Corporación Municipal de Deportes Quintero</title>
</svelte:head>

<aside />
<section>
	<a href="/">
		<img src="corp_logo.webp" width="350" alt="Corporación Municipal de Deportes Quintero" />
	</a>
	<form on:submit|preventDefault={login}>
		<Input label="Usuario" ph="Ingrese Usuario" bind:value={user} />
		<Input label="Contraseña" ph="Ingrese Contraseña" bind:value={password} />
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
