# Getting Started with Micro Front End - Remote Applications

An example remote application that exposes itself as a webpack module that can be imported by a MFE host application. See [`mfe-host-container`](https://github.com/sroy-eq/mfe-host-container).

Read more about MFE [here](https://micro-frontends.org/). 


## Usage

`yarn` - to install the node packages. 

`yarn start` - to run the application. It uses the port 3001. 


## Micro-frontend Remotes
This remote MFE application is configured to expose this application as a module that can be consumed by a MFE host application. See `modulefederation.config.js` file in this repo. 

You can create other remote MFE remote applications and expose the whole application or any component from it as shown in the modulefederation config file here, and then change the modulefederation config file in the host container application to import and render. See the modulefederation config file in the [`mfe-host-container`](https://github.com/sroy-eq/mfe-host-container/blob/main/modulefederation.config.js). 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
