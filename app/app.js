'use strict';

//
// ANGULAR & LIBRARIES
//
var angular = require('angular');

// NODE MODULES
require('angular-route');

// THREEjs
global.THREE = require('three/build/three.min');
require('three/examples/js/controls/OrbitControls');

//
// INIT APP
//
var app = angular.module('universe', ['ngRoute','socketService','renderService']);
app.config(require('./options/routes'));

//
// ANGULAR MODULES
//

// DIRECTIVES
require('./directives/renderBox');
require('./directives/raycaster');

// SERVICES
require('./services/socketService');
require('./services/renderService');

require('./controllers');

//
// BOOTSTRAP FOR PHONEGAP/CORDOVA
//
if( window.cordova ){

    document.addEventListener('deviceready', function onDeviceReady() {
        angular.bootstrap(document, ['universe']);
    }, false);

} else {

    angular.bootstrap(document, ['universe']);

}