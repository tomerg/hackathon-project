(function() {
angular.module('MyApp')
    .factory('Admin', Admin);

Admin.$inject = ['$http'];

function Admin($http) {

    var adminService = {
    chart: [],

    getAll: function() {
      console.log("Im in the service");
      return $http.get('/trans').then(function(data) {
  
        angular.copy(data.data, adminService.chart);
      });
    },

    // get: function(id) {
    //   return $http.get('/transaction/' + id).then(function(res){
    //     return res.data;
    //   });
    // },

  };

    // return {
    //   send: function(data) {
    //     return $http.get('/admin', data);
    //   }
    // };
  }

  return activityService;
})();

