pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                sh '''cd ../../../../..
                cd home/ruarduan/web/RuarduanWebsite
                git pull https://github.com/korkeng/RuarduanWebsite.git master'''
            }
        }
        stage('Test') {
            steps {
                sh '''cd ../../../../..
                cd home/ruarduan/web/RuarduanWebsite
                mvn clean package'''
            }
        }
        stage('Docker Remove') {	
            steps {	
                sh '''docker image ls	
                docker container ls	
                docker container stop $(docker ps -a -q --filter ancestor=ruarduan_web:0.0.1-SNAPSHOT --format="{{.ID}}")	
                docker rmi -f  $(docker images ruarduan_web --format="{{.ID}}")'''	
            }	
        }
        stage('Docker Build & Deploy') {
            steps {
                sh '''cd ../../../../../..
                cd home/ruarduan/web/RuarduanWebsite
                mvn package dockerfile:build
                docker run -d -p 8081:8081 ruarduan_web:0.0.1-SNAPSHOT
                docker image ls
                docker container ls'''
            }
        }
    }
}