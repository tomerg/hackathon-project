(function() {
angular.module('MyApp')
    .factory('Transaction', Transaction);

Transaction.$inject = ['$http'];

function Transaction($http) {

  var postService = {
    posts: [],

    // return {
      send: function(data) {
        return $http.post('/transaction', data).success(function(data){
        postService.posts.push(data);
        console.log(data);
        });
      }
    // };
  };

  return postService;
}
})();