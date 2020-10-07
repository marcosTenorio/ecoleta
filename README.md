![]()

<div align="center">
    <img src="https://github.com/marcosTenorio/ecoleta/blob/master/frontend/src/assets/logo.svg" width="300px"/>
</div>


<p align="center">
  <a href="#computer-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-built-with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-run">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">Get in touch</a>
  </p>


## :computer: Project 
 Ecoleta is an application that aims to help people find places that collect specific types of waste, encouraging people to recycle more.

<p align="center">
  <img src="https://github.com/rocketseat-education/nlw-01-ominstack/blob/master/.github/ecoleta.png" >
</p>


## :rocket: Built with

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [Typescript](https://www.typescriptlang.org/)
- [React Native](https://facebook.github.io/react-native/)
- [Express](https://expressjs.com/)
- [Expo](https://expo.io/)
- [Axios](https://www.npmjs.com/package/axios)




## :information_source: How to run

clone the repository
```sh
$ git clone https://github.com/marcosTenorio/ecoleta.git
```


### Backend
```bash
# go into the backend folder
$ cd ecoleta/backend

#install the backend dependencies
$ npm install

# run migrations
$ npm run knex:migrate
$ npm run knex:seed

# start the API
$ npm run dev
```

### Frontend
```bash
$ cd frontend

# install the dependencies
$ npm install

# run the project
$ npm start
```

### Mobile
The Application was developed using Expo. It is a free and open source toolchain built around React Native to facilitate the process of running and testing mobile applications. [Click here](https://expo.io/learn) to get start with Expo.
```bash
$ cd mobile

# install the dependencies
$ npm install
```
In order to run the application in your device, you need to change the ip config.
[api.ts](https://github.com/marcosTenorio/ecoleta/blob/master/mobile/src/services/api.ts)
```javascript
baseURL: 'http://192.168.0.206:3333',
```
replace 192.168.0.206 with your machine's ip.
Now with everything on place, run the application.
```bash
# to run the app
$ npm start
```
Expo will open a page in your browser, scan the QRcode in the page and wait the app to load.


## :mailbox_with_mail: Get in touch!
<a href="https://www.linkedin.com/in/marcos-tenorio12/" target="_blank" >
  <img alt="Linkedin - Marcos Tenorio" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>&nbsp;&nbsp;&nbsp;
<a href="mailto:marcos.francajr@gmail.com" target="_blank" >
  <img alt="Email - Marcos Tenorio" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a> 

---

Made with :coffee: and ❤️ by Marcos Tenorio.
