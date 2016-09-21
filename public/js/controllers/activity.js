app.controller('ActivityCtrl', ['$scope', 'Activity', function($scope, Activity){
  
  $scope.activity = Activity.trans;

}]);