pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/PRAJWALPATIL-13/portfolio-website.git'
            }
        }

        stage('Terraform Deploy') {
            steps {
                dir('Terraform') {
                    sh 'terraform init'
                    sh 'terraform apply -auto-approve'
                }
            }
        }

        stage('Upload Website') {
            steps {
                // sh 'aws s3 sync website/ s3://prajwal-portfolio-bucket2026'
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', 
                  credentialsId: 'aws-creds']]) {
                    sh 'aws s3 sync Website/ s3://prajwal-portfolio-bucket2026'
                }

            }
        }
    }
}