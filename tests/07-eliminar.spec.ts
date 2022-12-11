import { test } from '@playwright/test';

test('Eliminar evento', async ({ page }) => {
	await page.goto('http://localhost:5173/dashboard', { waitUntil: 'networkidle' });
	await page
		.getByRole('row', {
			name: 'Evento de prueba 12/24/2022 Calle 2 #456 20 19 Ver Editar Eliminar'
		})
		.getByRole('button', { name: 'Eliminar' })
		.click();
	await page.getByRole('dialog').getByRole('button', { name: 'Eliminar' }).click();
	await page.getByRole('dialog').click();
	await page.getByRole('link', { name: 'Cerrar' }).click();
	await page.getByRole('link', { name: 'Eventos Historicos' }).click();
	await page.getByRole('cell', { name: 'Evento de prueba' }).click();
	await page.getByRole('cell', { name: '12/24/2022' }).click();
	await page.getByRole('cell', { name: 'Calle 2 #456' }).click();
	await page
		.getByRole('row', {
			name: 'Evento de prueba 12/24/2022 Calle 2 #456 20 19 Ver'
		})
		.getByRole('cell', { name: '20' })
		.nth(1)
		.click();
	await page.getByRole('cell', { name: '19' }).click();
});
