## Scalable Services - Notification Microservice

### This microservice sends email notification using `nodemailer`

#### Steps to run locally

- Clone this project
- Run `npm install` (only for 1st time)
- create a `.env` with following contents in project root
  `USERS_DATABASE_URL=mongodb://localhost:27017/serviceUsers`
  `NOTIFIER_EMAIL=SENDER_EMAIL_ID_HERE`
  `NOTIFIER_PASSWORD=APP_PASSWORD`
- `NOTIFIER_PASSWORD` should be the app password created from https://myaccount.google.com/apppasswords
- Run `npm start`

#### App should now be running on `http://localhost:3006`

### Setup Mongodb locally using all default settings from below link

https://www.mongodb.com/try/download/community
![image](https://github.com/user-attachments/assets/b2063aae-1269-4d0c-b282-f5e017df86dc)

### Call /notify with Postman

#### SUCCESS

![image](https://github.com/user-attachments/assets/7e6d2d3e-7a5a-462f-9c4a-815fb1e10207)

#### FAILED

![image](https://github.com/user-attachments/assets/67c4b171-74d9-4c8a-95da-85f364a5ef16)
