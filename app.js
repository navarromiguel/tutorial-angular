var app = angular.module('gemStore', ["store-directives"]);
app.controller('StoreController', function($scope, $http){
	
	$http.get('colecciones/array_extendido.json')
    .then(function(res){
      $scope.gems = res.data;
      // Por defecto todos los productos se pueden comprar y están en stock
      angular.forEach($scope.gems, function(value, key){
        value.canPurchase = true;
        value.soldOut = false;
      })
    }, function(err){
      console.log(err);
      console.log(err);
  	});

});

app.controller("GalleryController", function($scope){

	$scope.current = 0;

	$scope.setCurrent = function(currentPhoto){
		$scope.current = currentPhoto ? currentPhoto : 0;
		return $scope.current;
	}
});





