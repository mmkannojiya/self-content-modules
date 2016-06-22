angular.module('myTmoApp.loginModule',['ui.router']);
angular.module('myTmoApp.loginModule').config(function ($stateProvider ,$locationProvider, $urlRouterProvider) {
  //$urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(true).hashPrefix('!');
  $stateProvider
      .state('login', {
        url: '/login',
		templateUrl:'templates/login-partial.html'
      });

  }).constant('LOGIN_CONST', {
    'LOGIN': '/auth',
    'AUTHLOGINDATA': 'authlogindata',
    'DOUBLESLASH': '://',
    'CLIENT_CREDENTIALS': 'client_credentials',
    'ENTER_MSISDN': 'Enter a value for MSISDN',
    'ENETR_EMAIL': 'Enter a value for email',
    'LOGGEDIN_STATE': 'loggedinState',
    'LOGGEDIN_STATE_PARAMS': 'loggedinStateParams',
    //E2E Fix Start - QC28265, QC28380- Switch Accounts Link missing
	'SET_MULTIPLE_ACCOUNTS_EVENT': 'setMultipleAccounts'});
angular.module('myTmoApp.loginModule').run(['$templateCache', function($templateCache) {
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
    "                                <input type=\"Text\" class=\"form-control\" placeholder=\"Username\" required>\r" +
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
    "                          <button type=\"submit\" class=\"btn btn-success btn-login btn-lg\" name=\"login\">Login</button>\r" +
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
