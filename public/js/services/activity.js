app.factory('Activity', ['$http', function($http) {
  var activityService = {
    trans: [],

    getAll: function() {
      console.log("Im in the service");
      return $http.get('/trans').then(function(data) {
  
        angular.copy(data.data, activityService.trans);
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