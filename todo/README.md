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

### 2. npm run start

##### 1) npm install 실행 시 오류 발생

###### - nodejs v20 설치, vscode deployment tool 다운로드 (node-gyp)

###### - package.json 변경 : node, npm  버전 변경, diabloflow-fulfillment 지원 종료 (대체 -> "@google-cloud/dialogflow": "^6.14.0") 

```
"engines": {
    "node": "20.18.3",
    "npm": "11.2.0"
  },
  .
  .
  .
    "dependencies": {
    "@google-cloud/dialogflow": "^6.14.0",
    "axios": "^1.8.2",
    "follow-redirects": "^1.15.6",
    "json-bigint": "^1.0.0",
    "node-forge": "^1.3.0",
    .
    .
    .
  },
```

##### 2) server/routes/diabloflow.js 수정

```
.
.
.

const dialogflow = require("@google-cloud/dialogflow"); // diabloflow-fulfillment -> @google-cloud/dialogflow

.
.
.
// Create a new session
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId); // @google-cloud/dialogflow sessionClient 객체 메서드
.
.
.

```

### 3. CREDENTIALS 이슈 발생 ---- 해결 중