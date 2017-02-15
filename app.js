var app = angular.module('gemStore', []);
app.controller('StoreController', function($scope){
	var gem = { name: 'Diamante', price: 300 };
	$scope.product = gem;
});