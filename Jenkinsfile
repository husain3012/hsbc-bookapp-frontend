pipeline {
    agent any

    stages {
        stage('cloning') {
            steps {
                bat '''REM Set the folder name and repository URL
                set "FOLDER_NAME=empfrontend"
                set "REPO_URL=https://github.com/husain3012/hsbc-bookapp-frontend.git"
                
                REM Check if the folder exists
                if exist "%FOLDER_NAME%" (
                    echo Removing existing folder "%FOLDER_NAME%"...
                    rmdir /s /q "%FOLDER_NAME%"
                )
                
                REM Clone the repository
                echo Cloning repository from "%REPO_URL%"...
                git clone "%REPO_URL%" "%FOLDER_NAME%"'''
            }
        }

        stage('version update'){
             steps {
                bat '''@echo off
                setlocal
                
                REM Change directory to empfrontend
                cd empfrontend
                
                REM Set the version file name
                set "NUMBER_FILE=version.txt"
                
                REM Read the number from the file
                set /p number=<"%NUMBER_FILE%"
                
                REM Increment the number
                set /a number+=1
                
                REM Write the new number back to the file
                echo %number% > "%NUMBER_FILE%"
                
                echo Version number updated to %number%.
                
                endlocal
                '''
            }
        }

        stage('push version'){
            steps {
               bat '''cd empfrontend
                git config --global user.email "hsr3012kalimg@gmail.com"
                git config --global user.name "Husain Shahid Rao"
                git pull
                git add .
                git commit -m "update version"
                git push https://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@github.com/husain3012/hsbc-bookapp-frontend.git'''
            }
        }
    }
}
