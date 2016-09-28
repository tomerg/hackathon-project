(function() {
angular.module('MyApp')
    .controller('RadarCtrl', RadarCtrl);

RadarCtrl.$inject = ['$scope'];

function RadarCtrl($scope) {
  $scope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

  $scope.data = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
  ];
}
})();


