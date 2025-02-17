 export class loginPage{
  public page: any

  constructor(page: any){
    this.page = page
  }

  async insertIDAndPassword(cpf, password) {
    await this.page.getByRole('textbox', { name: 'Digite seu CPF' }).fill(cpf)
    await this.page.getByRole('button', { name: 'Continuar' }).click()

    for(const digit of password) {
      await this.page.getByRole('button', { name: digit }).click()
     }

    await this.page.getByRole('button', { name: 'Continuar' }).click()

    await this.page.getByText('Verificação em duas etapas').waitFor({timeout:3000})
  }

}