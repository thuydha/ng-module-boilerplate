'use strict';

angular.module('g3cApp.traoDoi',[])
	.config(['$routeProvider', function config($routeProvider){
		$routeProvider.when('/traoDoi',{
			controller:'traoDoiCtrl',
			template: '<h3>day la trang trao doi</h3>'
		}).
		when('/traoDoi/:userid',{
			controller:'traoDoiChiTietCtrl',
			template: '<p>trao doi chi tiet {{userID}} </p>'
		});
	}]);