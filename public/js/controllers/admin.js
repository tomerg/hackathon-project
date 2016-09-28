(function() {
angular.module('MyApp')
    .controller('AdminCtrl', AdminCtrl);

AdminCtrl.$inject = ['$scope', 'Admin'];

function AdminCtrl($scope, Admin) {
    $scope.colors = [{
      backgroundColor: 'rgba(113, 151, 214, 0.2)',
      pointBackgroundColor: 'rgba(113, 151, 214,1)',
      pointHoverBackgroundColor: 'rgba(113, 151, 214,1)',
      borderColor: 'rgb(255, 125, 101)',
      pointBorderColor: '#fff',
      pointHoverBorderColor: 'rgb(51, 181, 204)'
  }];
  // $scope.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"];
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  // $scope.series = ['Series A'];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

  // $scope.data = Admin.chart;

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };
}
})();