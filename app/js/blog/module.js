'use strict';

/* Blog Module */

angular.module('g3cApp.blog', [])
	.config(['$routeProvider', function config( $routeProvider ) {
	  $routeProvider.when('/blog', {
		controller: 'BlogController',
		templateUrl: 'partial/blog.html'
	  });
	}]);
	
	