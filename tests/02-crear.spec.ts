import { test } from '@playwright/test';

test('Crear evento', async ({ page }) => {
	await page.goto('http://localhost:5173/dashboard/crear', { waitUntil: 'networkidle' });
	await page.getByPlaceholder('Ingrese nombre del evento').fill('Evento de prueba');
	await page.getByRole('combobox').selectOption('Abierto');
	await page.getByPlaceholder('Ingrese categoría del evento').fill('Categoría 1, Categoría 2');
	await page.getByPlaceholder('Ingrese cupo del evento').fill('10');
	await page.getByPlaceholder('Ingrese la fecha de inicio del evento').fill('2022-12-21');
	await page.getByPlaceholder('Ingrese la fecha de termino del evento').fill('2022-12-21');
	await page.getByPlaceholder('Ingrese la hora de inicio del evento').fill('13:00');
	await page.getByPlaceholder('Ingrese la hora de término del evento').fill('14:00');
	await page.getByPlaceholder('Ingrese la dirección del evento').fill('Calle 1 #123');
	await page.getByPlaceholder('Ingrese la descripción del evento').fill('Descripción del evento');
	await page.getByPlaceholder('Ingrese los requisitos del evento').fill('Requisitos del evento');
	await page.getByRole('checkbox').check();
	await page.getByRole('button', { name: 'Crear Evento' }).click();
	await page.getByRole('heading', { name: '¡Evento creado!' }).click();
	await page
		.getByText('El evento ha sido creado correctamente. Ya puedes ver los detalles en la sección')
		.click();
	await page.getByRole('link', { name: 'Volver' }).click();
});
