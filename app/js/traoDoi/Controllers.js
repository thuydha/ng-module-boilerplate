'use strict';
angular.module('g3cApp.traoDoi')
	.controller('traoDoiCtrl',['$scope', function traoDoiCtrl( $scope ){}])
	.controller('traoDoiChiTietCtrl',
		['$scope','$routeParams', function traoDoiChiTietCtrl( $scope, $routeParams){
		
		console.log("$routeParams:");
		console.log($routeParams);
		$scope.userID = $routeParams.userid;

	}]);