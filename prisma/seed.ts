import { PrismaClient } from '@prisma/client';
import type { persona, usuario, evento, categoria_evento, inscribe_evento } from '@prisma/client';

const prisma = new PrismaClient();

const mockPersona: persona[] = [
	{
		rut: '11111111-1',
		nombres: 'Juan',
		apellidos: 'Perez',
		telefono_personal: 123456789,
		telefono_contacto: 123456789,
		correo: 'juan.perez@example.com',
		fecha_nacimiento: new Date('1990-01-01'),
		direccion: 'Calle falsa 123',
		sexo: 'M',
		talla: 'S'
	},
	{
		rut: '22222222-2',
		nombres: 'Maria',
		apellidos: 'Gonzalez',
		telefono_personal: 123456789,
		telefono_contacto: 123456789,
		correo: 'maria.gonzalez@example.com',
		fecha_nacimiento: new Date('1990-01-01'),
		direccion: 'Calle falsa 123',
		sexo: 'F',
		talla: 'M'
	},
	{
		rut: '33333333-3',
		nombres: 'Pedro',
		apellidos: 'Gonzalez',
		telefono_personal: 123456789,
		telefono_contacto: 123456789,
		correo: 'pedro.gonzalez@example.com',
		fecha_nacimiento: new Date('1990-01-01'),
		direccion: 'Calle falsa 123',
		sexo: 'M',
		talla: 'L'
	},
	{
		rut: '44444444-4',
		nombres: 'Jose',
		apellidos: 'Perez',
		telefono_personal: 123456789,
		telefono_contacto: 123456789,
		correo: 'jose.perez@example.com',
		fecha_nacimiento: new Date('1990-01-01'),
		direccion: 'Calle falsa 123',
		sexo: 'M',
		talla: 'S'
	},
	{
		rut: '55555555-5',
		nombres: 'Maria',
		apellidos: 'Perez',
		telefono_personal: 123456789,
		telefono_contacto: 123456789,
		correo: 'maria.perez@example.com',
		fecha_nacimiento: new Date('1990-01-01'),
		direccion: 'Calle falsa 123',
		sexo: 'F',
		talla: 'M'
	},
	{
		rut: '66666666-6',
		nombres: 'Pedro',
		apellidos: 'Perez',
		telefono_personal: 123456789,
		telefono_contacto: 123456789,
		correo: 'pedro.perez@example.com',
		fecha_nacimiento: new Date('1990-01-01'),
		direccion: 'Calle falsa 123',
		sexo: 'M',
		talla: 'L'
	},
	{
		rut: '77777777-7',
		nombres: 'Jose',
		apellidos: 'Gonzalez',
		telefono_personal: 123456789,
		telefono_contacto: 123456789,
		correo: 'jose.gonzalez@example.com',
		fecha_nacimiento: new Date('1990-01-01'),
		direccion: 'Calle falsa 123',
		sexo: 'M',
		talla: 'S'
	},
	{
		rut: '88888888-8',
		nombres: 'Carla',
		apellidos: 'Gonzalez',
		telefono_personal: 123456789,
		telefono_contacto: 123456789,
		correo: 'carla.gonzalez@example.com',
		fecha_nacimiento: new Date('1990-01-01'),
		direccion: 'Calle falsa 123',
		sexo: 'F',
		talla: 'M'
	},
	{
		rut: '99999999-9',
		nombres: 'Carla',
		apellidos: 'Perez',
		telefono_personal: 123456789,
		telefono_contacto: 123456789,
		correo: 'carla.perez@example.com',
		fecha_nacimiento: new Date('1990-01-01'),
		direccion: 'Calle falsa 123',
		sexo: 'F',
		talla: 'L'
	}
];

const mockUsuario: usuario[] = [
	{
		rut: '11111111-1',
		nombre: 'juan',
		contrasena: '123456',
		estado: 'Activo'
	},
	{
		rut: '22222222-2',
		nombre: 'maria',
		contrasena: '123456',
		estado: 'Activo'
	},
	{
		rut: '33333333-3',
		nombre: 'pedro',
		contrasena: '123456',
		estado: 'Activo'
	}
];

const mockEvento: evento[] = [
	{
		id: 1,
		nombre: 'Evento 1',
		tipo: 'Abierto',
		cupo: 10,
		fecha_inicio: new Date('2022-11-01'),
		fecha_termino: new Date('2022-11-02'),
		hora_inicio: new Date('2022-11-01 08:00:00'),
		hora_termino: new Date('2022-11-01 18:00:00'),
		direccion: 'Calle falsa 123',
		descripcion: 'Descripcion del evento 1',
		requisitos: 'Requisitos del evento 1',
		estado: 'Activo'
	},
	{
		id: 2,
		nombre: 'Evento 2',
		tipo: 'Abierto',
		cupo: 10,
		fecha_inicio: new Date('2022-11-01'),
		fecha_termino: new Date('2022-11-02'),
		hora_inicio: new Date('2022-11-01 08:00:00'),
		hora_termino: new Date('2022-11-01 18:00:00'),
		direccion: 'Calle falsa 123',
		descripcion: 'Descripcion del evento 2',
		requisitos: 'Requisitos del evento 2',
		estado: 'Activo'
	},
	{
		id: 3,
		nombre: 'Evento 3',
		tipo: 'Abierto',
		cupo: 10,
		fecha_inicio: new Date('2022-11-01'),
		fecha_termino: new Date('2022-11-02'),
		hora_inicio: new Date('2022-11-01 08:00:00'),
		hora_termino: new Date('2022-11-01 18:00:00'),
		direccion: 'Calle falsa 123',
		descripcion: 'Descripcion del evento 3',
		requisitos: 'Requisitos del evento 3',
		estado: 'Activo'
	},
	{
		id: 4,
		nombre: 'Evento 4',
		tipo: 'Abierto',
		cupo: 10,
		fecha_inicio: new Date('2022-11-01'),
		fecha_termino: new Date('2022-11-02'),
		hora_inicio: new Date('2022-11-01 08:00:00'),
		hora_termino: new Date('2022-11-01 18:00:00'),
		direccion: 'Calle falsa 123',
		descripcion: 'Descripcion del evento 4',
		requisitos: 'Requisitos del evento 4',
		estado: 'Activo'
	},
	{
		id: 5,
		nombre: 'Evento 5',
		tipo: 'Abierto',
		cupo: 10,
		fecha_inicio: new Date('2022-11-01'),
		fecha_termino: new Date('2022-11-02'),
		hora_inicio: new Date('2022-11-01 08:00:00'),
		hora_termino: new Date('2022-11-01 18:00:00'),
		direccion: 'Calle falsa 123',
		descripcion: 'Descripcion del evento 5',
		requisitos: 'Requisitos del evento 5',
		estado: 'Activo'
	}
];

const mockCategoria: categoria_evento[] = [
	{
		id_evento: 1,
		categoria: 'Categoria 1'
	},
	{
		id_evento: 1,
		categoria: 'Categoria 2'
	},
	{
		id_evento: 2,
		categoria: 'Categoria 3'
	},
	{
		id_evento: 2,
		categoria: 'Categoria 1'
	},
	{
		id_evento: 3,
		categoria: 'Categoria 2'
	},
	{
		id_evento: 3,
		categoria: 'Categoria 3'
	}
];

const mockInscripcion: inscribe_evento[] = [
	{
		rut: '44444444-4',
		id_evento: 1,
		fecha: new Date('2022-11-01'),
		categoria: 'Categoria 1'
	},
	{
		rut: '55555555-5',
		id_evento: 2,
		fecha: new Date('2022-11-01'),
		categoria: 'Categoria 3'
	},
	{
		rut: '66666666-6',
		id_evento: 3,
		fecha: new Date('2022-11-01'),
		categoria: 'Categoria 2'
	},
	{
		rut: '77777777-7',
		id_evento: 4,
		fecha: new Date('2022-11-01'),
		categoria: 'Categoria 1'
	},
	{
		rut: '88888888-8',
		id_evento: 5,
		fecha: new Date('2022-11-01'),
		categoria: 'Categoria 3'
	}
];

async function main() {
	await prisma.persona.createMany({
		data: mockPersona
	});

	await prisma.usuario.createMany({
		data: mockUsuario
	});

	await prisma.evento.createMany({
		data: mockEvento
	});

	await prisma.categoria_evento.createMany({
		data: mockCategoria
	});

	await prisma.inscribe_evento.createMany({
		data: mockInscripcion
	});
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
