pipeline {
    agent any

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
