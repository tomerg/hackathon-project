(function() {
angular.module('MyApp')
    .controller('RadarCtrl', RadarCtrl);

RadarCtrl.$inject = ['$scope'];

function RadarCtrl($scope) {
  $scope.colors = [{
      backgroundColor: 'rgba(113, 151, 214, 0.2)',
      pointBackgroundColor: 'rgba(113, 151, 214,1)',
      pointHoverBackgroundColor: 'rgba(113, 151, 214,1)',
      borderColor: 'rgb(255, 125, 101)',
      pointBorderColor: '#fff',
      pointHoverBorderColor: 'rgb(51, 181, 204)'
  }];
  $scope.labels =["Country", "Location", "Age", "Male", "Female", "Marital Status", "Race"];

  $scope.data = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
  ];
}
})();


