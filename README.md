# self-content-modules
This is a self content login module which can be installed as a bower component. 
It provides basic login templates with basic angular application setup.

#Installation

run command `bower install --save login-module-bower`

#How to use

**(1)** include 'myTmoApp.loginModule' module in your main angular module
eg. 
>
```javascript
angular.module('myTmoApp',['myTmoApp.loginModule']);
```
		
**(2)** include all neccessary file manually or using build tool in index.html like angular, angular-ui-router	
	
**(3)** include 'bower_components/login-module-bower/release/login-module-config.js' file in index.html

**(4)** Run application. Let's say your application served at 'localhost:8080'. Then navigating to 'localhost:8080/login'
		will open a login form. 

**(5)** Enter 'Madan' in username field and anything on password field. it will send http-request to 'localhost:9000/validateUser'

#Features

**(1)** Overriding Constant:

You can override constant of login module. Login module have 3 property of 'LOGIN_CONST' constant as below.
		
API_ENDPOINT : sets api end point (eg.'http://localhost:9000')

LOGIN_URL: sets api name (eg. '/validateUser')

NEXT_STATE: sets next state after login
to override these constant you have to inject 'LOGIN_CONST' in your 'config', 'controller' or 'service' and assign new value
		
>
```javascript
LOGIN_CONST.NEXT_STATE  = 'logout'
```
		
		
**(2)** Change states definitions:
You can also change state configuration like below example:
- Inject $state as dependency in run method
- Then using $state.get method get your desired state data.
- Modify it by assigning new value
		
>
```javascript
angular.module('myTmoApp.loginModule')
.run(['$state', function($state){
  var state = $state.get('login');
  if(state){
	state.template = '<p>Customized template</p>';
  }
}]);
```

**(3)** Add new states definitions:		
		
You can add new states with definitions as below:
		
>
```javascript
angular.module('myTmoApp.loginModule').config(function ($stateProvider ,$locationProvider, $urlRouterProvider,LOGIN_CONST) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $stateProvider
	  .state('page2', {
		url: '/page2',
		template:'<h1>Welcome </h1>',	
	  });
	})
```
		
**(4)** Create new service or controller 
You can create new controllers and services of existing module
		
>
```javascript
angular.module('myTmoApp.loginModule').controller('newController',function(){//some implementation});
angular.module('myTmoApp.loginModule').service('newService',function(){//some implementation});
```