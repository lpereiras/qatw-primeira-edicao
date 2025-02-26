import { test, expect } from '@playwright/test';
import { get2FACode } from '../support/db';
import { loginPage } from '../pages/loginPage';
import { cleanJobs, getJob } from '../support/redis';

const user = {
  cpf: '00000014141',
  password: '147258'
}

test.beforeEach(async ({ page }) => {
  await page.goto('');
})

test('validate that my login fails when code is invalid', async ({ page }) => {
  const login = new loginPage(page)
  
  await login.insertIDAndPassword(user.cpf, user.password)

  await page.getByPlaceholder('000000').fill('123456')
  await page.getByRole('button', { name: 'Verificar' }).click()

  await expect(page.locator('span')).toContainText('Código inválido. Por favor, tente novamente.')
});

test('should access the user account', async ({ page }) => {
  const login = new loginPage(page)

  //cleanJobs() //limpa a fila no redis antes de prosseguir com o teste

  await login.insertIDAndPassword(user.cpf, user.password)

  //const code = await getJob() //consulta o código 2FA através da fila do redis

  const code = await get2FACode(user.cpf) //consulta o código 2FA através da fila do banco

  await page.getByPlaceholder('000000').fill(code)
  await page.getByRole('button', { name: 'Verificar' }).click()

  await expect(page.getByText('Saldo disponível')).toBeVisible()
});