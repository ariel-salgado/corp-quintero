import { test } from '@playwright/test';

test('Ver personas inscritas en el evento', async ({ page }) => {
	await page.goto('http://localhost:5173/dashboard', { waitUntil: 'networkidle' });
	await page
		.getByRole('row', { name: 'Evento de prueba 12/21/2022 Calle 1 #123 10 9 Ver Editar Eliminar' })
		.getByRole('link', { name: 'Ver' })
		.click();
	await page.locator('span').filter({ hasText: 'Categoría 2' }).click();
	await page.locator('span').filter({ hasText: 'Categoría 1' }).click();
	await page.getByRole('heading', { name: 'Evento de prueba' }).click();
	await page.getByText('21 dic 2022').click();
	await page.getByText('13:00 - 14:00').click();
	await page.getByText('10 cupos').click();
	await page.getByText('Calle 1 #123').click();
	await page.getByText('Descripción del evento').click();
	await page.getByText('Requisitos del evento').click();
	await page.getByRole('heading', { name: 'Total inscritos: 1' }).click();
	await page.getByRole('cell', { name: '99.999.999-9' }).click();
	await page.getByRole('cell', { name: 'Pablito Perez' }).click();
	await page.getByRole('cell', { name: 'M' }).nth(3).click();
	await page.getByRole('cell', { name: '1/1/1997' }).click();
	await page.getByRole('cell', { name: '987654321' }).click();
	await page.getByRole('cell', { name: '123456789' }).click();
	await page.getByRole('cell', { name: 'pablito.perez@gmail.com' }).click();
	await page
		.getByRole('row', {
			name: '99.999.999-9 Pablito Perez M 1/1/1997 987654321 123456789 pablito.perez@gmail.com L'
		})
		.getByRole('cell', { name: 'L' })
		.nth(2)
		.click();
});
