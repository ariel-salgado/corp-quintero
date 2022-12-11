import { test } from '@playwright/test';

test('Editar evento', async ({ page }) => {
	await page.goto('http://localhost:5173/dashboard', { waitUntil: 'networkidle' });
	await page
		.getByRole('row', { name: 'Evento de prueba 12/21/2022 Calle 1 #123 10 9 Ver Editar Eliminar' })
		.getByRole('link', { name: 'Editar' })
		.click();
	await page.getByPlaceholder('Ingrese nombre del evento').fill('Evento de prueba');
	await page.getByRole('combobox').selectOption('Cerrado');
	await page.getByPlaceholder('Ingrese categoría del evento').fill('Categoría 3, Categoría 4');
	await page.getByPlaceholder('Ingrese cupo del evento').fill('20');
	await page.getByPlaceholder('Ingrese la fecha de inicio del evento').fill('2022-12-24');
	await page.getByPlaceholder('Ingrese la fecha de termino del evento').fill('2022-12-24');
	await page.getByPlaceholder('Ingrese la hora de inicio del evento').fill('15:00');
	await page.getByPlaceholder('Ingrese la hora de término del evento').fill('16:00');
	await page.getByPlaceholder('Ingrese la dirección del evento').fill('Calle 2 #456');
	await page
		.getByPlaceholder('Ingrese la descripción del evento')
		.fill('Descripción del evento editado');
	await page
		.getByPlaceholder('Ingrese los requisitos del evento')
		.fill('Requisitos del evento editado');
	await page.getByRole('checkbox').uncheck();
	await page.getByRole('button', { name: 'Actualizar Evento' }).click();
	await page.getByRole('heading', { name: '¡Evento actualizado!' }).click();
	await page
		.getByText(
			'El evento ha sido actualizado correctamente. Ya puedes ver los detalles en la sección de eventos.'
		)
		.click();
	await page.getByRole('link', { name: 'Volver' }).click();
});
