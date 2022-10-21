<footer>
	<div>
		<div>
			<h2>Contacto</h2>
			<ul>
				<li>Fono: +563 2237 9667</li>
				<li>Correo:</li>
				<li>
					<a href="mailto:corporacion@deportesquintero.cl">corporacion@deportesquintero.cl</a>
				</li>
				<li>
					<a href="mailto:inscripciones@deportesquintero.cl">inscripciones@deportesquintero.cl</a>
				</li>
			</ul>
		</div>
		<div>
			<h2>Redes Sociales</h2>
			<ul>
				<li>
					<a href="https://www.facebook.com/profile.php?id=100062430710738">Facebook</a>
				</li>
				<li>
					<a href="https://www.instagram.com/corp.deportesquintero/?hl=es">Instagram</a>
				</li>
			</ul>
		</div>
	</div>

	<aside>
		<a href="http://www.deportesquintero.cl/">
			<img
				width="250"
				height="105"
				src="/corp_logo.webp"
				alt="Corporación municipal de deportes Quintero"
			/>
		</a>
		<a href="https://www.muniquintero.cl/">
			<img width="110" height="100" src="/quintero.webp" alt="Municipalidad de Quintero" />
		</a>
	</aside>
</footer>

<style scoped>
	h2 {
		@apply font-extrabold uppercase mb-4 min-w-max;
	}

	footer {
		@apply w-full bg-lightsecondary text-darkblue text-xs lg:text-sm flex justify-between flex-col md:flex-row px-6 md:px-14 py-10 shadow-inner;
	}

	footer > div {
		@apply block lg:flex justify-between w-5/12 gap-x-16;
	}

	footer > div > div:nth-child(2) {
		@apply mt-12 lg:mt-0;
	}

	div ul {
		@apply uppercase;
	}

	ul li {
		@apply py-1 min-w-max;
	}

	li a {
		@apply hover:text-lightblue transition-all duration-300;
	}

	aside {
		@apply flex flex-col sm:flex-row md:flex-col lg:flex-row place-items-center justify-around w-full md:w-2/5 gap-12 mt-12 md:mt-0;
	}

	aside a:first-child {
		@apply min-w-[250px];
	}

	aside a:last-child {
		@apply min-w-[110px];
	}
</style>
