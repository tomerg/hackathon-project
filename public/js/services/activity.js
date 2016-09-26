app.factory('Activity', ['$http', function($http) {
  var activityService = {
    trans: [],

    getAll: function() {      
      return $http.get('/trans').then(function(data) {
        angular.copy(data.data, activityService.trans);
      });
    },

    get: function(id) {
      // console.log("heres the id" + id);
      return $http.get('/transaction/' + id).then(function(data){
        // console.log("came back from the server", data.data);
        angular.copy(data.data, activityService.trans);
        // return res.data;
        // console.log(activityService.trans.transactions);
      });
    },

  };
  

  return activityService;
}]);