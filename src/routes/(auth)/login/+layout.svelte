<main>
	<slot />
</main>

<style lang="postcss" scoped>
	main {
		@apply grid grid-flow-col place-items-center text-center grid-cols-1 lg:grid-cols-2;
	}
</style>
