<script lang="ts">
	import calendar from '$lib/assets/calendar.svg';
	import clock from '$lib/assets/clock.svg';
	import group from '$lib/assets/group.svg';
	import location from '$lib/assets/location.svg';

	export let fecha_termino: Date;
	export let hora_inicio: Date;
	export let hora_termino: Date;
	export let cupo: number;
	export let direccion: string;

	fecha_termino = new Date(fecha_termino);
	hora_inicio = new Date(hora_inicio);
	hora_termino = new Date(hora_termino);
</script>

<picture>
	<div>
		<img src={calendar} alt="Calendario" />
		<span>
			{new Date(
				fecha_termino?.getTime() - fecha_termino?.getTimezoneOffset() * -60000
			).toLocaleDateString('es-CL', {
				year: 'numeric',
				month: 'short',
				day: 'numeric'
			})}
		</span>
	</div>

	<div>
		<img src={clock} alt="Horario" />
		<span>
			{new Date(
				hora_inicio?.getTime() - fecha_termino?.getTimezoneOffset() * -60000
			).toLocaleTimeString('es-CL', {
				hour: '2-digit',
				minute: '2-digit'
			})} -
			{new Date(
				hora_termino?.getTime() - fecha_termino?.getTimezoneOffset() * -60000
			).toLocaleTimeString('es-CL', {
				hour: '2-digit',
				minute: '2-digit'
			})}
		</span>
	</div>

	<div>
		<img src={group} alt="Cupos" />
		<span>{cupo} cupos</span>
	</div>

	<div>
		<img src={location} alt="Lugar" />
		<span>{direccion}</span>
	</div>
</picture>

<style scoped>
	picture {
		@apply flex flex-wrap gap-x-6 mb-4 justify-between md:justify-start;
	}

	div {
		@apply flex items-center place-items-center my-1;
	}

	img {
		@apply object-contain w-5 h-5;
	}

	span {
		@apply text-gray-500 ml-1 text-sm;
	}
</style>
