(function() {
angular.module('MyApp')
    .controller('AnalyticsCtrl', AnalyticsCtrl);

AnalyticsCtrl.$inject = ['$scope'];

function AnalyticsCtrl($scope) {
  $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
}
})();


