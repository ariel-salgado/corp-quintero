<script lang="ts">
	import calendar from '$lib/assets/calendar.svg';
	import clock from '$lib/assets/clock.svg';
	import group from '$lib/assets/group.svg';
	import location from '$lib/assets/location.svg';

	export let fecha_termino: Date | undefined;
	export let hora_inicio: Date | undefined;
	export let hora_termino: Date | undefined;
	export let cupo: number | undefined;
	export let direccion: string | undefined;
</script>

<picture>
	<div>
		<img src={calendar} alt="Calendario" />
		<span>
			{fecha_termino?.toLocaleDateString('es-CL', {
				day: 'numeric',
				month: 'short',
				year: 'numeric'
			})}
		</span>
	</div>

	<div>
		<img src={clock} alt="Horario" />
		<span>
			{hora_inicio?.toLocaleTimeString('es-CL', {
				hour: '2-digit',
				minute: '2-digit'
			})} -
			{hora_termino?.toLocaleTimeString('es-CL', {
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
		@apply flex flex-wrap gap-x-6 mb-4 justify-between;
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
