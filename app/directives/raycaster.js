'use strict';

var angular = require('angular');
var app = angular.module('universe');

app.directive('raycaster',function($rootScope) {

    return {
		restrict: 'EA',
		scope: true,
		link: function (scope, element) {

			function target() {

  				if ($rootScope.three.raycasting.targets.length > 0) {
  				
  					console.log($rootScope.three.raycasting.targets);
				
				}

			}

			element.bind('click',target);

  		}

	};

});