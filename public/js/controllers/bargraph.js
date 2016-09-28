(function() {
angular.module('MyApp')
    .controller('BarCtrl', BarCtrl);

BarCtrl.$inject = ['$scope'];

function BarCtrl($scope) {
  $scope.labels = ['Mexico', 'India', 'Philippines', 'China', 'Russia', 'England', 'Brazil'];
  $scope.series = ['Series A', 'Series B'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
}
})();


