import { test, expect } from '@playwright/test';

const user = {
  cpf: '00000014141',
  password: '147258'
}

test('validate that my login fails when code is invalid', async ({ page }) => {

  await page.goto('');

  await page.getByRole('textbox', { name: 'Digite seu CPF' }).fill(user.cpf);
  await page.getByRole('button', { name: 'Continuar' }).click();

  for(const digit of user.password) {
    await page.getByRole('button', { name: digit }).click();
   }

  await page.getByRole('button', { name: 'Continuar' }).click();

  await page.getByPlaceholder('000000').fill('123456');
  await page.getByRole('button', { name: 'Verificar' }).click();

  await expect(page.locator('span')).toContainText('Código inválido. Por favor, tente novamente.');
});

test('should access the user account', async ({ page }) => {});