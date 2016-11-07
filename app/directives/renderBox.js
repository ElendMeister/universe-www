'use strict';

var angular = require('angular');
var app = angular.module('universe'),
  THREE = global.THREE;

app.directive('renderbox',function($rootScope) {

  return {

    restrict: 'E',
    scope: true,

    link: function (scope, element) {

      var data = {};

      function init() {

        try {

          if (typeof $rootScope.three === 'undefined') {

            data.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            data.renderer.setSize(element[0].clientWidth, element[0].clientHeight);
            data.renderer.shadowMap.enabled = true;
            
            data.loadTexture = new THREE.TextureLoader();
            data.loadTexture.crossOrigin = '';

            data.raycasting = {
              mouse: new THREE.Vector2(),
              raycaster: new THREE.Raycaster(),
              targets:[]
            };

            data.raycasting.mouse.x = ( window.innerWidth ) * 2 - 1;
            data.raycasting.mouse.y = - ( window.innerHeight ) * 2 + 1;

            data.camera = new THREE.PerspectiveCamera(50, element[0].clientWidth / element[0].clientHeight, 1, 200000000000000000);
            data.camera.position.set(1000,-33,0);

            data.controls = new THREE.OrbitControls(data.camera,data.renderer.domElement);

            data.scene = new THREE.Scene();
            data.scene.add(data.camera);
    
            data.timestamp = Date.now();


            $rootScope.three = data;

          } else {

            data.timestamp = false;

          }

        } catch(err) {
        
          console.log(err);

        }

      }
          
      function onMouseMove(event) {

        $rootScope.three.raycasting.mouse.x = ( event.clientX / element[0].clientWidth ) * 2 - 1;
        $rootScope.three.raycasting.mouse.y = - ( event.clientY / element[0].clientHeight ) * 2 + 1; 

      }

      function onWindowResize() {

        $rootScope.data.camera.aspect = element[0].clientWidth / element[0].clientHeight;
        $rootScope.data.camera.updateProjectionMatrix();
        $rootScope.data.renderer.setSize(element[0].clientWidth, element[0].clientHeight);

      }

      init();
      
      window.addEventListener('resize', onWindowResize, false);
      window.addEventListener('mousemove', onMouseMove, false);

      element.append(angular.element($rootScope.three.renderer.domElement));

    }

  };

});