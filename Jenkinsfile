pipeline {
    agent {
      docker {
        image 'papitodev/playwright-nj-v1.49.1-noble'
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
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
        }  
    }
}
