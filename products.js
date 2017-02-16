var directives = angular.module('store-directives', []);

directives.directive("productDescription", function() { return {
	restrict: 'E',
	templateUrl: "product-description.html" };
});

directives.directive("productSpecs", function() { return {
  restrict: 'A',
  templateUrl: "product-specs.html" };
})

directives.directive("productTabs", function() { return {
  restrict: 'E',
  templateUrl: "product-tabs.html",
  contollerAs: 'tab',
  controller: function($scope){
      $scope.tab = 1;

      $scope.setTab = function(selectedTab){
        $scope.tab = selectedTab;
      };

      $scope.isSet = function(tabCheck){
        return $scope.tab == tabCheck;
      };

  } };
});