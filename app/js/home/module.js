'use strict';

/* Home Module */

angular.module('g3cApp.home', [])
	.config(['$routeProvider', function config( $routeProvider ) {
	  $routeProvider.when('/home', {
		controller: 'HomeController',
		template: '<p>This is my Home</p>'
	  });
	}]);