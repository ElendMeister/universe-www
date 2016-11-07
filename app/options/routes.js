'use strict';

module.exports = function($routeProvider) {

  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: '../views/main.html'
    })
    .when('/v/:star/:node?', {
      controller: 'LocalEnvironmentController',
      templateUrl: '../views/env.html'
    })
    .otherwise({redirectTo:'/'});

};
