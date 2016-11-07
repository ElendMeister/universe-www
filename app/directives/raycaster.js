'use strict';

var angular = require('angular');
var app = angular.module('universe');

app.directive('raycaster',function($rootScope) {

    return {
		restrict: 'EA',
		scope: true,
		link: function (scope, element) {

			function target() {

  				if ($rootScope._data.raycasting.targets.length > 0) {
  				
  					console.log($rootScope._data.raycasting.targets);
				
				}

			}

			element.bind('click',target);

  		}

	};

});