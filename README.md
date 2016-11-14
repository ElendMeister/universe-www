# universe-www

Javascript stand-alone Phonegap-ready THREEJs Angular Socket.io Bootstrap using GULP and Browserify

## What is Universe-www?

Universe-www is a bootstrap I developed to serve THREEjs applications through Phonegap for smart devices as well as use as a regular stand-alone socket.io client.

In short, Universe-www gives you a bundled end-product containing...

- Ready-to-use Socket.io implementation of the btford-socket-io provider.  
- THREEjs renderbox  
- Automatic Raycasting  
- Use of rootScope object for storage of three objects
- Phonegap-ready by bootstrapping angular  

#### Note: If you're looking for a quick standalone socket.io mvc framework for Universe-www, you can't find any quicker or easier than [Sockey, the standalone Socket.io MVC framework](https://github.com/cgraamans/sockey) that I've written. :)

## What can I do with Universe-www

- Quickly develop threejs applications for phones and tablets  
- Connect to a Socket server for data such as tokenized registration and login ([sockey!](https://github.com/cgraamans/sockey))  

## Universe-www Uses...

- [AngularJS 1.x](https://angularjs.org/)  
  - [Angular-Route](https://docs.angularjs.org/api/ngRoute)  
- [Socket.io](http://socket.io/)  
  - Socket.io's Client  
  - [Brian Ford's Angular Socket.io Provider](https://github.com/btford/angular-socket-io)  
- [Browserify](https://browserify.org/) (update as necessary)  
- [Gulp](http://gulpjs.com/)  
- [THREEjs](http://threejs.org)  


## Universe-www Requirements

    sudo npm install -g gulp

## Installation

    git clone https://github.com/cgraamans/universe-www
    cd universe-www
    npm install

If you're going to develop mobile applications you will need to get Phonegap. To install phonegap [read this..](http://phonegap.com/) and then [this](http://assortedgarbage.com/apigee/).

## Setup

To run:

    cd universe-www
    gulp

To export:

    cd universe-www
    gulp export

To minify (TBD):

    cd universe-www
    gulp min

To prepare for phonegap

    cd universe-www
    gulp phonegap

Copy the **dist** folder to your phonegap's www folder afterwards.

## Under The Hood

- Options for socket settings and routing can be found in **/app/options**.

### Happy Coding!

#### TODO:

- login and registration with angular-local-storage 
- ng-annotate
- more documentation