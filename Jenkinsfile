pipeline {
    agent none 
    environment {
         docker_app = "database"
        registry = "155.98.37.91" //CHANGE THIS IF THE EXPERIMENT GOES DOWN
        userid = "jc997541" //OTHER GROUP MEMBERS CHANGE THIS
       
    }
    stages {
        stage ('Deploy') {
            agent {
                node {
                    label 'deploy'
                }
            }
            steps {
                sshagent(credentials: ['cloudlab']) {
                    sh "sed -i 's/REGISTRY/${registry}/g' agu-deployment.yaml"
                    sh "sed -i ''s/DOCKER_APP/${docker_app}/g' agu-deployment.yaml"
                    sh "sed -i 's/BUILD_NUMBER/${BUILD_NUMBER}/g' agu-deployment.yaml"
                    sh 'scp -r -v -o StrictHostKeyChecking=no *.yaml ${userid}@${registry}:~/'
                    sh 'ssh -o StrictHostKeyChecking=no ${userid}@${registry} kubectl apply -f /users/${userid}/agu-deployment.yaml'
                    sh 'ssh -o StrictHostKeyChecking=no ${userid}@${registry} kubectl apply -f /users/${userid}/mysql-secret.yaml'
                    sh 'ssh -o StrictHostKeyChecking=no ${userid}@${registry} kubectl apply -f /users/${userid}/mysql-storage.yaml'
                    sh 'ssh -o StrictHostKeyChecking=no ${userid}@${registry} kubectl apply -f /users/${userid}/agu-services.yaml'
                    
                }
            }
        }
    }
}
