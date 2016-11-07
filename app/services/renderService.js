'use strict';

try {

	var app = require('angular').module('renderService',[]);	
	app.factory('renderer', function ($rootScope) {

	    var factory = {

	    	stop: function() {

	    		if ($rootScope._data.animationId !== false) {

	    			cancelAnimationFrame( $rootScope._data.animationId );
	    			$rootScope._data.animationId = false;

	    		}

	    	},
	    	render: function() {

				$rootScope._data.scene.updateMatrixWorld();

	    		if (typeof $rootScope._data !== 'undefined') {

	    			// $rootScope._data.camera.translateZ(-10);

					$rootScope._data.raycasting.raycaster.setFromCamera( $rootScope._data.raycasting.mouse, $rootScope._data.camera );	
	                var intersects = $rootScope._data.raycasting.raycaster.intersectObjects( $rootScope._data.scene.children, true );
	                $rootScope._data.raycasting.targets = [];

	                if (intersects.length > 0) {

	                    $rootScope._data.raycasting.targets = intersects;

	                }
	                $rootScope._data.renderer.render($rootScope._data.scene, $rootScope._data.camera);


	    		}

	    	}

	    };

	    return factory;

	});

} catch(err) {

	console.error('Error creating socketService');
	console.log(err);

}