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
		
		loginService.validateUser($scope.username).then(function(response){
			if(response.data.result === 'success'){
				if(LOGIN_CONST.NEXT_STATE != ''){
				
				$state.go(LOGIN_CONST.NEXT_STATE);
				sessionStorage.setItem('username',$scope.username);
				}else{
					console.error('Login Module : No next state is defined');
				}
			}else{
				
				window.alert('Invalid User');
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
	
	
});angular.module('myTmoApp.loginModule').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/login-partial.html',
    "<div class=\"container\">\r" +
    "\n" +
    "<h2 style=\"text-align:center;\">Login</h2>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"col-md-offset-3 col-md-6\"> \r" +
    "\n" +
    "<form class=\"form-horizontal\">\r" +
    "\n" +
    "                        <div class=\"form-group left-inner-addon\">\r" +
    "\n" +
    "                            <label for=\"inputUsername\" class=\"control-label col-xs-4\">Username</label>\r" +
    "\n" +
    "                            <div class=\"col-xs-6\">\r" +
    "\n" +
    "                                \r" +
    "\n" +
    "                                <input type=\"Text\" class=\"form-control\" ng-model=\"username\" placeholder=\"Username\" required>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"form-group left-inner-addon\">\r" +
    "\n" +
    "                            <label for=\"inputPassword\" class=\"control-label col-xs-4\">Password</label>\r" +
    "\n" +
    "                            <div class=\"col-xs-6\">\r" +
    "\n" +
    "                                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <center>\r" +
    "\n" +
    "                          <button type=\"button\" class=\"btn btn-success btn-login btn-lg\" ng-click =\"submitUsername()\" name=\"login\">Login</button>\r" +
    "\n" +
    "                          </center> \r" +
    "\n" +
    "                    </form>\r" +
    "\n" +
    "</div>                    \r" +
    "\n" +
    "                    </div>"
  );

}]);
