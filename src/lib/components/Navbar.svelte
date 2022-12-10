<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<nav>
	<a href="/">
		<img
			src="/corp_logo.webp"
			width="340"
			height="144"
			alt="Corporación Municipal de Deportes Quintero"
		/>
	</a>
	<div>
		<Button to="/login" text="Iniciar Sesión" />
	</div>
</nav>

<style lang="postcss" scoped>
	nav {
		@apply w-full min-w-[375px] inline-grid grid-cols-2 lg:grid-cols-3 place-items-center gap-4 px-4 lg:px-14 py-2 bg-lightsecondary text-darkblue shadow;
	}

	nav div {
		@apply justify-self-end lg:justify-self-center;
	}

	nav a {
		@apply col-start-1 lg:col-start-2;
	}

	a img {
		@apply cursor-pointer min-w-[180px];
	}
</style>
