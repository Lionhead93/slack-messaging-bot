# Slack messaging bot

## Required

- install node <https://nodejs.org/ko/download/>  
- create slack channel and add bot

## Build

```bash
$ npm-bundle
```

- npm install

## Run

- create .env file and set variable (PORT, SLACK_TOKEN)  

- npm run start

```shell
$ pm2 delete "slack-bot" 
# 서비스 기동
$ pm2 start --name "slack-bot" npm -- run start
$ pm2 start --name "slack-bot" npm -- run start
# 상태 저장
$ pm2 save
```  
