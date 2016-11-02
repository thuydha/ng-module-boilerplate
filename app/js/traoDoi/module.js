'use strict';

angular.module('g3cApp.traoDoi',[])
	.config(['$routeProvider', function config($routeProvider){
		$routeProvider.when('/traoDoi',{
			controller:'traoDoiCtrl',
			templateUrl: 'partial/traoDoi.html'
		});
		// when('/traoDoi/:userid',{
		// 	controller:'traoDoiChiTietCtrl',
		// 	template: '<p>trao doi chi tiet {{userID}} </p>'
		// });
	}]);