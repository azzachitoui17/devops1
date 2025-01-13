pipeline {
    agent any
    environment {
        BACKEND_IMAGE = 'azza177/backend:latest'
        FRONTEND_IMAGE = 'azza177/frontend:latest'
    }
    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning the repository'
                git branch: 'main', url: 'https://github.com/azzachitoui17/devops1.git'
            }
        }
        stage('Build Docker Images') {
            steps {
                echo 'Building Docker images for backend and frontend'
                sh """
                    docker build -t $BACKEND_IMAGE -f ./app/Dockerfile ./app
                    docker build -t $FRONTEND_IMAGE -f ./react-proj/Dockerfile ./react-proj
                """
            }
        }
        stage('Push Docker Images') {
            steps {
                echo 'Pushing Docker images to Docker Hub'
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh """
                            echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                            docker push $BACKEND_IMAGE
                            docker push $FRONTEND_IMAGE
                        """
                    }
                }
            }
        }
    }
}