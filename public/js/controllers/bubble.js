(function() {
angular.module('MyApp')
    .controller('BubbleCtrl', BubbleCtrl);

BubbleCtrl.$inject = ['$scope', '$interval'];

function BubbleCtrl($scope,  $interval) {
    $scope.options = {
      scales: {
        xAxes: [{
          display: false,
          ticks: {
            max: 125,
            min: -125,
            stepSize: 10
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            max: 125,
            min: -125,
            stepSize: 10
          }
        }]
      }
    };

    createChart();
    $interval(createChart, 2000);

    function createChart () {
      $scope.series = [];
      $scope.data = [];
      for (var i = 0; i < 50; i++) {
        $scope.series.push(`Series ${i}`);
        $scope.data.push([{
          x: randomScalingFactor(),
          y: randomScalingFactor(),
          r: randomRadius()
        }]);
      }
    }

    function randomScalingFactor () {
      return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
    }

    function randomRadius () {
      return Math.abs(randomScalingFactor()) / 4;
    }
}
})();


