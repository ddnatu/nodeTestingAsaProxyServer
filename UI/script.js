var app = angular.module('myApp',[]);
app.controller('MyController',["$scope","$http",function($scope,$http){
	$scope.name = 'Devdutta Natu';
	$scope.workAt = 'Infosys Limited';
	 $http.post(url, data, config)
	    .success(function (data, status, headers, config) {
	    	console.log('success');
	    })
	    .error(function (data, status, header, config) {
	    	console.log('error');
	    });
}]);