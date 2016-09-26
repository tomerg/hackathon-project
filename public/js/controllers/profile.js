(function() {
angular.module('MyApp')
    .controller('ProfileCtrl', ProfileCtrl);

ProfileCtrl.$inject = ['$scope', '$rootScope', '$location', '$window', '$auth', 'Account'];

function ProfileCtrl($scope, $rootScope, $location, $window, $auth, Account) {
    // var ctrl = this;
    $scope.updateProfile = updateProfile;
    $scope.changePassword = changePassword;
    $scope.link = link;
    $scope.unlink = unlink;
    $scope.deleteAccount = deleteAccount;
    $scope.unlink = unlink;
    $scope.profile = $rootScope.currentUser;

    function updateProfile() {
        Account.updateProfile($scope.profile)
          .then(function(response) {
            $rootScope.currentUser = response.data.user;
            $window.localStorage.user = JSON.stringify(response.data.user);
            $scope.messages = {
              success: [response.data]
            };
          })
          .catch(function(response) {
            $scope.messages = {
              error: Array.isArray(response.data) ? response.data : [response.data]
            };
          });
    }

    function changePassword() {
        Account.changePassword($scope.profile)
          .then(function(response) {
            $scope.messages = {
              success: [response.data]
            };
          })
          .catch(function(response) {
            $scope.messages = {
              error: Array.isArray(response.data) ? response.data : [response.data]
            };
          });
    }

    function link(provider) {
        $auth.link(provider)
          .then(function(response) {
            $scope.messages = {
              success: [response.data]
            };
          })
          .catch(function(response) {
            $window.scrollTo(0, 0);
            $scope.messages = {
              error: [response.data]
            };
          });
    }

    function unlink(provider) {
        $auth.unlink(provider)
          .then(function() {
            $scope.messages = {
              success: [response.data]
            };
          })
          .catch(function(response) {
            $scope.messages = {
              error: [response.data]
            };
          });
    }

    function deleteAccount() {
        $scope.deleteAccount = function() {
          Account.deleteAccount()
            .then(function() {
              $auth.logout();
              delete $window.localStorage.user;
              $location.path('/');
            })
            .catch(function(response) {
              $scope.messages = {
                error: [response.data]
              };
            });
        };
    }
}
})();
