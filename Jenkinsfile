pipline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
        IMAGE_NAME_SERVER = 'azza177/server'
        IMAGE_NAME_SERVER = 'azza177/client'
    }
    stages {
        stage('checkout'){
            steps {
                git branch: 'main',
                    url : 'https://github.com/azzachitoui17/devops.git';
        }
    }
    stage ( 'Build Server Image') {
            steps {
                dir ( 'app') {
                    script {
                        dockerImageServer = docker.build ("${IMAGE_NAME_SERVER}")
                        }
                    }
                }
        }
    stage ( 'Build client Image ') {
            steps {
                dir ( 'react-proj') {
                    script {
                        dockerImageServer = docker.build ("${IMAGE_NAME_SERVER}")
                        }
                    }
                }
        }
    stage ( 'push   Images') {
            steps {
                    script {
                        docker.withRegistry('',"${
                            DOCKERHUB_CREDENTIALS}") {
                                dockerImageServer.push()
                                dockerImageClient.push()
                        
                        }
                    }
                
        }
    }
    }
    
}