export enum evento_tipo {
	Abierto,
	Cerrado
}

export enum usuario_estado {
	Activo,
	Inactivo
}

export enum persona_sexo {
	M,
	F,
	N_A
}

export enum persona_talla {
	S,
	M,
	L,
	XL,
	XXL
}

export enum evento_estado {
	Activo,
	Inactivo
}

export type categoria_evento = {
	id_evento: number;
	categoria: string;
	evento: evento;
};

export type evento = {
	id: number;
	nombre: string;
	tipo: evento_tipo;
	cupo: number;
	fecha_inicio: Date;
	fecha_termino: Date;
	hora_inicio: Date;
	hora_termino: Date;
	direccion: string;
	descripcion?: string;
	requisitos?: string;
	estado: evento_estado;
	categoria_evento: categoria_evento[];
	inscribe_evento: inscribe_evento[];
};

export type inscribe_evento = {
	rut: string;
	id_evento: number;
	fecha: Date;
	categoria: string;
	persona: persona;
	evento: evento;
};

export type persona = {
	rut: string;
	nombres: string;
	apellidos: string;
	telefono_personal: number;
	telefono_contacto?: number;
	correo: string;
	fecha_nacimiento: Date;
	direccion: string;
	sexo: persona_sexo;
	talla: persona_talla;
	inscribe_evento: inscribe_evento[];
	usuario?: usuario;
};

export type usuario = {
	rut: string;
	nombre: string;
	contrasena: string;
	estado: usuario_estado;
	persona: persona;
};
