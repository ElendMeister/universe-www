'use strict';

module.exports = function($scope,$rootScope,socket,renderer) {
  
  var THREE = global.THREE;

  $scope.spinner = true;
  $scope.navOverlay = true;

  var start = function() {

    $rootScope._data.animationId = requestAnimationFrame(start);
    renderer.render();

  };

  $scope.$watch('$rootScope._data',function(){

    if (typeof $rootScope._data !== 'undefined') {

      if (typeof $rootScope._data.timestamp !== 'undefined') {

        $scope.spinner = false;

        // Example THREEjs
        var geometry = new THREE.SphereGeometry( 5, 32, 32 ),
          material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        var sphere = new THREE.Mesh( geometry, material );
        var light = new THREE.AmbientLight( 0x404040 );     

        $rootScope._data.scene.add( sphere );
        $rootScope._data.scene.add( light );      

        start();

      }

    }

  },false);

};
