var app = angular.module('gemStore', []);
app.controller('StoreController', function($scope){
	$scope.gems = [
	  {
	    "name": "Zafiro",
	    "description": "El zafiro es un mineral precioso del grupo del corindón con característico color azul",
	    "shine": 8,
	    "price": 275,
	    "rarity": 7,
	    "color": "Azul",
	    "faces": 14,
	    "images": [
	      "images/gem-02.gif",
	      "images/gem-05.gif",
	      "images/gem-09.gif"
	    ]
	  },
	  {
	    "name": "Esmeralda",
	    "description": "La esmeralda es la variedad verde del berilo, un mineral ciclosilicato de berilio y aluminio.",
	    "shine": 9,
	    "price": 250,
	    "rarity": 6,
	    "color": "Verde",
	    "faces": 12,
	    "images": [
	      "images/gem-01.gif",
	      "images/gem-03.gif",
	      "images/gem-04.gif"
	    ]
	  },
	  {
	    "name": "Diamante",
	    "description": "El diamante es un alótropo del carbono donde los átomos de carbono están dispuestos en una variante de la estructura cristalina cúbica",
	    "shine": 70,
	    "price": 300,
	    "rarity": 2,
	    "color": "Transparente",
	    "faces": 6,
	    "images": [
	      "images/gem-06.gif",
	      "images/gem-07.gif",
	      "images/gem-08.gif"
	    ]
	  }
	];

	angular.forEach($scope.gems, function(value, key){
		value.canPurchase = true;
		value.soldOut = false;
	});

});

app.controller('TabController', function($scope){

	$scope.tab = 1;

	$scope.setTab = function(tab){
		$scope.tab = tab;
	};

	$scope.isSet = function(tab){
		return $scope.tab == tab;
	};
});


app.controller("GalleryController", function($scope){

	$scope.current = 0;

	$scope.setCurrent = function(currentPhoto){
		$scope.current = currentPhoto ? currentPhoto : 0;
		return $scope.current;
	};
});




