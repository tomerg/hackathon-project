app.controller('ActivityCtrl', ['$scope', 'Activity', function($scope, Activity){
  
  $scope.activity = Activity.trans.transactions;

  $scope.addTrans = function() {
    if ($scope.title === '') { return; }

    posts.create({ 
      title: $scope.title, 
      link: $scope.link
    });

    $scope.title = '';
    $scope.link = '';
  }

}]);