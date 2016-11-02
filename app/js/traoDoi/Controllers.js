'use strict';
angular.module('g3cApp.traoDoi')
	.controller('traoDoiCtrl',['$scope', '$http', function traoDoiCtrl( $scope, $http ){
		$http.get('../../data/traodoi/vpCuaToi.json')
		.then(function mySucces(response) {
        	$scope.vpCuaToi = response.data.vpCuaToi;
    	}, 
    	function myError(response) {
        	console.log(response);
   		});
   		$http.get('../../data/traodoi/vpCuaBan.json')
   		.then(function mySucces(response){
   			$scope.vpCuaBan = response.data.vpCuaBan;
   		},
   		function myError(response){
   			console.log(response);
   		});
	}]);
	// .controller('traoDoiChiTietCtrl',
	// 	['$scope','$routeParams', function traoDoiChiTietCtrl( $scope, $routeParams){
		
	// 	console.log("$routeParams:");
	// 	console.log($routeParams);
	// 	$scope.userID = $routeParams.userid;

	// }]);