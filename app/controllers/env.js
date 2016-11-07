'use strict';

module.exports = function($scope,$rootScope,socket,renderer) {
  
  var THREE = global.THREE;

  $scope.spinner = true;
  $scope.navOverlay = true;

  var start = function() {

    $rootScope.three.animationId = requestAnimationFrame(start);
    renderer.render();

  };

  $scope.$watch('$rootScope.three',function(){

    if (typeof $rootScope.three !== 'undefined') {

      if (typeof $rootScope.three.timestamp !== 'undefined') {

        $scope.spinner = false;

        // Example THREEjs
        var geometry = new THREE.SphereGeometry( 5, 32, 32 ),
          material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        var sphere = new THREE.Mesh( geometry, material );
        var light = new THREE.AmbientLight( 0x404040 );     

        $rootScope.three.scene.add( sphere );
        $rootScope.three.scene.add( light );      

        start();

      }

    }

  },false);

};
