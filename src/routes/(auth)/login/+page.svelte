<script lang="ts">
	import type { ActionData } from './$types';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/form/Input.svelte';
	import Notification from '$lib/components/Notification.svelte';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Ingreso | Corporación Municipal de Deportes Quintero</title>
</svelte:head>

<aside>
	<img src="/hero.webp" alt="Background" />
</aside>
<section>
	{#if form !== undefined}
		<div>
			{#if form?.credentials}
				<Notification
					error
					openOn={true}
					title="Lo sentimos"
					body="Los datos ingresados no son válidos, vuelva a intentarlo"
				/>
			{/if}
		</div>
	{/if}

	<a href="/">
		<img src="corp_logo.webp" width="350" alt="Corporación Municipal de Deportes Quintero" />
	</a>

	<form action="?/login" method="post">
		<div>
			<Input name="username" label="Usuario" ph="Ingrese Usuario" />
			{#if form?.errors?.username}
				<span>* {form?.errors.username[0]}</span>
			{/if}
		</div>

		<div>
			<Input password name="password" label="Contraseña" ph="Ingrese Contraseña" />
			{#if form?.errors?.password}
				<span>* {form?.errors.password[0]}</span>
			{/if}
		</div>

		<Button text="Ingresar" />
		<Button text="Volver" to="/" />
	</form>
</section>

<style scoped>
	aside {
		@apply hidden lg:block w-full h-screen;
	}

	aside img {
		@apply object-cover w-full h-full;
	}

	section {
		@apply w-full grid place-items-center gap-10 p-10 lg:p-16;
	}

	section > div {
		@apply w-full;
	}

	form {
		@apply w-full grid place-items-center text-center gap-8;
	}

	form div {
		@apply w-full text-left;
	}

	span {
		@apply text-neutralorange text-xs italic;
	}
</style>
