'use strict';

var app = require('angular').module('universe');
app.controller('MainController',require('./main.js'));
app.controller('LocalEnvironmentController',require('./env.js'));