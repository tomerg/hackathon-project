(function() {
angular.module('MyApp')
    .factory('Admin', Admin);

Admin.$inject = ['$http'];

function Admin($http) {
    return {
      send: function(data) {
        return $http.get('/admin', data);
      }
    };
}
})();