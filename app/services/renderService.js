'use strict';

try {

	var app = require('angular').module('renderService',[]);	
	app.factory('renderer', function ($rootScope) {

	    var factory = {

	    	stop: function() {

	    		if ($rootScope.three.animationId !== false) {

	    			cancelAnimationFrame( $rootScope.three.animationId );
	    			$rootScope.three.animationId = false;

	    		}

	    	},
	    	render: function() {

				$rootScope.three.scene.updateMatrixWorld();

	    		if (typeof $rootScope.three !== 'undefined') {

	    			// $rootScope.three.camera.translateZ(-10);

					$rootScope.three.raycasting.raycaster.setFromCamera( $rootScope.three.raycasting.mouse, $rootScope.three.camera );	
	                var intersects = $rootScope.three.raycasting.raycaster.intersectObjects( $rootScope.three.scene.children, true );
	                $rootScope.three.raycasting.targets = [];

	                if (intersects.length > 0) {

	                    $rootScope.three.raycasting.targets = intersects;

	                }
	                $rootScope.three.renderer.render($rootScope.three.scene, $rootScope.three.camera);


	    		}

	    	}

	    };

	    return factory;

	});

} catch(err) {

	console.error('Error creating socketService');
	console.log(err);

}