export function validaRut(rutCompleto: string): boolean {
	rutCompleto = rutCompleto.replace('‐', '-');
	rutCompleto = rutCompleto.replace('.', '');

	if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;

	let tmp = rutCompleto.split('-');
	let digv = tmp[1];
	let rut = tmp[0];
	if (digv == 'K') digv = 'k';

	return dv(Number(rut)) == digv;
}

function dv(T: number): number | 'k' {
	let M = 0,
		S = 1;

	for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
	return S ? S - 1 : 'k';
}
