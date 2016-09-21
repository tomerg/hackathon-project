app.factory('Activity', ['$http', function($http) {
  var activityService = {
    activity: [],

    getAll: function() {
      return $http.get('/transaction').then(function(data) {
  
        angular.copy(data.data, activityService.activity);
      });
    },

    // get: function(id) {
    //   return $http.get('/transaction/' + id).then(function(res){
    //     return res.data;
    //   });
    // },

  };
  

  return activityService;
}]);