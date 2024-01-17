pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                // Copy the chatbot.html to the workspace
                bat 'copy chatbot.html %WORKSPACE%'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing the application...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
            }
        }
    }

    post {
        always {
            // Publish HTML report using HTML Publisher Plugin
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: '$WORKSPACE',
                reportFiles: 'chatbot.html',
                reportName: 'Chatbot'
            ])
        }
    }
}
