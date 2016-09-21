(function() {
angular.module('MyApp')
    .factory('Transaction', Transaction);

Transaction.$inject = ['$http'];

function Transaction($http) {
    return {
      send: function(data) {
        return $http.post('/transaction', data);
      }
    };
}
})();