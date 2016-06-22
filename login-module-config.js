angular.module('myTmoApp.loginModule',['ui.router','loginTemplates']);
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
