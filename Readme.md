## 🚀 Configuração do Ambiente
1. Faça um Fork do projeto
2. Clone este repositório:
   ```sh
   git clone git@github.com/lpereiras/qatw-primeira-edicao.git
   cd qatw-primeira-edicao
   ```
   
## 🐳 Subindo o Ambiente com Docker Compose
O projeto utiliza Docker Compose para gerenciar os serviços necessários para os testes.

1. Certifique-se de que o Docker Desktop está em execução.
2. No terminal, execute o comando abaixo para subir os serviços:
   ```sh
   docker-compose up -d
   ```
3. Para verificar se os contêineres estão rodando:
   ```sh
   docker ps
   ```
4. Para parar os serviços:
   ```sh
   docker-compose down
   ```

## 🧪 Executando os Testes com Playwright

1. Instale as dependências do projeto:
   ```sh
   yarn install
   ```
2. Configure o DB ou Redis Insight para execução dos testes 
   ```sh
   arquivo docker-compose.yml contém instruções para configuração
   ```
3. Para rodar os testes localmente:
   ```sh
   yarn playwright test
   ```
4. Para visualizar o relatório dos testes após a execução:
   ```sh
   yarn playwright show-report
   ```
5. Para rodar os testes em modo UI (visualizando a execução):
   ```sh
   yarn playwright test --ui
   ```

## 📄 Licença
Este projeto está sob a licença MIT.

Obrigado Papito pelo conteúdo!