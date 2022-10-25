<main>
	<slot />
</main>

<style scoped>
	main {
		@apply h-screen grid grid-flow-col place-items-center text-center grid-cols-1 lg:grid-cols-2;
	}
</style>
