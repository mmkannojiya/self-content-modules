angular.module('myTmoApp.loginModule',['ui.router']);
angular.module('myTmoApp.loginModule').config(function ($stateProvider ,$locationProvider, $urlRouterProvider) {
  //$urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(true).hashPrefix('!');
  $stateProvider
      .state('login', {
        url: '/login',
		templateUrl:'templates/login-partial.html',
		controller:'loginController'
      });

  }).constant('LOGIN_CONST', {
    'API_ENDPOINT':'http://localhost:9000',
	'LOGIN_URL' : '/validateUser',
	'NEXT_STATE':''
	
	});
angular.module('myTmoApp.loginModule').controller('loginController',function($scope, loginService, $state, LOGIN_CONST){
	
	$scope.username = '' ;
	$scope.submitUsername = function(){
		
		loginService.validateUser($scope.username).then(function(data){
			if(data.result === 'success'){
				
				$state.go(LOGIN_CONST.NEXT_STATE);
			}
			
		});
		
	}
});
angular.module('myTmoApp.loginModule').service('loginService',function($q, $http, LOGIN_CONST){
	
	this.validateUser = function(username){
		var defered = $q.defer();
		$http.get(LOGIN_CONST.API_ENDPOINT+LOGIN_CONST.LOGIN_URL+'?username='+username).then(function(response){
		
			defered.resolve(response);
		
		},function(error){
		
		defered.reject(error);
	})
		return defered.promise;
	}
	
	
})
