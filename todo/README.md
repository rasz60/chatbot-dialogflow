# Chapter 1. Set Up Enviroments

### 1. Google Console 프로젝트 생성

##### - https://console.cloud.google.com/

### 2. Dialogflow Agent 생성

##### - https://dialogflow.cloud.google.com/

### 3. Service Accounts 생성

##### - Google Console 프로젝트 > IAM / Admin > Service Accounts

##### - Private Key json 파일 다운로드

### 4. server > config > dev.js 파일 생성 후 값 입력

##### - googleProjectID : Google Console에서 생성한 프로젝트 이름

##### - googleClientEmail : 3번에서 다운로드한 PrivateKey.json 파일 확인

##### - googlePrivateKey : 3번에서 다운로드한 PrivateKey.json 파일 확인

# Chapter 2. Source Code - Server

### 1. /server/routes/dialogflow.js

##### 1) express, route 기본 설정

##### 2) Dialogflow NPM 사이트에서 예제 코드 copy

##### 3) '/textQuery' route callback function으로 paste

##### 4) 변수 config에서 가져오도록 변경, callback function custom
