pipeline {
    agent {
      docker {
        image 'mcr.microsoft.com/playwright:v1.50.1-noble'
        args '--network qatw-primeira-edicao_skynet'
      }
    }

    stages {
        stage('package.json deps') {
            steps {
              sh 'yarn install'
            }
        }      
        stage('Execução de testes E2E') {
            steps {
                sh 'yarn pyr:run'
            }
        }  
    }
}
