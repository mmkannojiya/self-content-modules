angular.module('myTmoApp.loginModule',['ui.router']);
angular.module('myTmoApp.loginModule').config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
		template:'<h1>Hey There</h1>'
      });

  }).constant('LOGIN_CONST':{
	'PASSWORD_INVALID_MSG': 'Username/Password is incorrect',
    'SECURE_PROTOCOL': 'https',
    'HTTP_PROTOCOL': 'http',
    'AUTHLOGINDATA': 'authlogindata',
    'TOKEN_INITIALS': 'xyz',
    'REP': 'rep'
	});