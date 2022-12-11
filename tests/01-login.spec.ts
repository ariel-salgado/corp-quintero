import { test, expect } from '@playwright/test';

/* test('Login fallido', async ({ page }) => {
	await page.goto('http://localhost:5173/login');
	await page.getByPlaceholder('Ingrese Usuario').fill('username');
	await page.getByPlaceholder('Ingrese Contraseña').fill('password');
	await page.getByRole('button', { name: 'Ingresar' }).click();
	await page.getByRole('heading', { name: 'Lo sentimos' }).click();
	await page.getByText('Los datos ingresados no son válidos, vuelva a intentarlo').click();
}); */

test('Acceder al dashboard', async ({ page }) => {
	await page.goto('http://localhost:5173/login', { waitUntil: 'networkidle' });
	await page.getByPlaceholder('Ingrese Usuario').fill('juan');
	await page.getByPlaceholder('Ingrese Contraseña').fill('123456');
	await page.getByRole('button', { name: 'Ingresar' }).click();
	await expect(page).toHaveURL('http://localhost:5173/dashboard');
});
