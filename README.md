# Cloud-Music-Player-App: Music Bucket

## Project Description

This project will provide users a way to listen to music without any installation or subscription of music streaming services. Users must upload their song files onto the website. The website will store the song files to the AWS Cloud. Users can additionally share their music with other users. The website will prompt the user to upload a song or listen to a song that has been previously uploaded. Once songs get uploaded, users can organize them into playlists.

## Project Setup Environment

The setup environment will be using AWS. A few AWS services will be used: Amazon S3 buckets for storage (back end development) and AWS Amplify for front end development. Along with the AWS services, HTML and javascript will be used for the interface and full functionality of the website. Possible APIs could be added to provide better functionality.

## Features

* Upload any mp3 music file
* Play the songs uploaded
* Change playback speed of songs
* Re-download songs


## Requirements & How to Run

* Create an AWS account
* Run 'npm install' to install packages
* Run 'amplify init' to initialize a new AWS project
* Add authentication for S3 permissions
    * Run 'amplify add auth'
* Run 'amplify add storage'
* Run 'amplify push' to deploy resources
* Run 'npm i aws-amplify' to install AWS Amplify Javascript libraries
