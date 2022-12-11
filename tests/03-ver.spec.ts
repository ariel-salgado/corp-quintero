import { test } from '@playwright/test';

test('Ver evento creado', async ({ page }) => {
	await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
	await page
		.getByRole('article')
		.filter({ hasText: 'Evento de prueba Descripción del evento Ver más' })
		.getByRole('link', { name: 'Ver más' })
		.click();
	await page.getByText('Categoría 2').click();
	await page.getByText('Categoría 1').click();
	await page.getByRole('heading', { name: 'Evento de prueba' }).click();
	await page.getByText('21 dic 2022').click();
	await page.getByText('13:00 - 14:00').click();
	await page.getByText('10 cupos').click();
	await page.getByText('Calle 1 #123').click();
	await page.getByText('Descripción del evento').click();
	await page.getByText('Requisitos del evento').click();
});
