'use strict';

require('angular-socket-io');

var io = require('socket.io-client'),
	opt = require('../options/sockets.js');

var app = require('angular').module('socketService',['btford.socket-io']);	
app.factory('socket', function (socketFactory,$rootScope) {

	var rtnObj = {
    	
    	register: function() {

    	},

    	login: function() {

    	}

    };

    if (typeof $rootScope.socket === 'undefined') {

    	try {
    	
    		var passIoSocket = io.connect(opt.uri);

    		$rootScope.socket = socketFactory({
				ioSocket: passIoSocket,
				prefix:opt.prefix
			});
    	
    	} catch(err) {

    		console.error('Error connecting to socket.');
    		console.error(err);

    	}

    }

    return rtnObj;

});
