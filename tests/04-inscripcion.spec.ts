import { test } from '@playwright/test';

test('Inscribirse en un evento', async ({ page }) => {
	await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
	await page
		.getByRole('article')
		.filter({ hasText: 'Evento de prueba Descripción del evento Ver más' })
		.getByRole('link', { name: 'Ver más' })
		.click();
	await page.getByRole('link', { name: 'Inscribirse' }).click();
	await page.locator('select[name="categoria"]').selectOption('Categoría 1');
	await page.getByPlaceholder('Ingrese su RUT').fill('99.999.999-9');
	await page.getByPlaceholder('Ingrese sus nombres').fill('Pablito');
	await page.getByPlaceholder('Ingrese sus apellidos').fill('Perez');
	await page.locator('select[name="sexo"]').selectOption('M');
	await page.getByPlaceholder('Ingrese su fecha de nacimiento').fill('1997-01-01');
	await page.getByPlaceholder('Ingrese su teléfono de personal').fill('987654321');
	await page.getByPlaceholder('Ingrese su teléfono de contacto').fill('123456789');
	await page.getByPlaceholder('Ingrese su correo electrónico').fill('pablito.perez@gmail.com');
	await page.getByPlaceholder('Ingrese su dirección').fill('Casa de Pablito Perez');
	await page.locator('select[name="talla"]').selectOption('L');
	await page.getByRole('button', { name: 'Inscribirse' }).click();
	await page.getByRole('heading', { name: '¡Gracias por inscribirte!' }).click();
	await page.getByText('Te hemos enviado un correo con los detalles de tu inscripción.').click();
});
