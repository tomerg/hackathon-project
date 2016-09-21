(function() {
angular.module('MyApp')
    .controller('AdminCtrl', AdminCtrl);

AdminCtrl.$inject = ['$scope', 'Admin'];

function AdminCtrl($scope, Transaction) {
    // var ctrl = this;
    $scope.sendTransForm = sendTransForm;

    function sendTransForm() {
        Transaction.send($scope.transaction)
            .then(function(response) {
                $scope.messages = {
                    success: [response.data]
                    // success: "Transaction success"
                };
            })
            .catch(function(response) {
                $scope.messages = {
                    error: Array.isArray(response.data) ? response.data : [response.data]
                };
            });
    }
}
})();