(function() {
angular.module('MyApp')
    .factory('Admin', Admin);

Admin.$inject = ['$http'];

function Admin($http) {

    var adminService = {
    chart: [],

    get: function(id) {
      console.log("Im in the service");
      return $http.get('/gettransaction/' + id).then(function(data) {
  
        angular.copy(data.data, adminService.chart);
        console.log("data from service",adminService.chart);
      });
    },

    // getAll: function(id) {
    //   console.log("Im in the service");
    //   return $http.get('/transaction/' + id).then(function(data) {
  
    //     angular.copy(data.data, adminService.chart);
    //   });
    // },

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
  return adminService;
  }

})();

