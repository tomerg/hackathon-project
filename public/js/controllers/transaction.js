(function() {
angular.module('MyApp')
    .controller('TransactionCtrl', TransactionCtrl);

TransactionCtrl.$inject = ['$scope', 'Transaction'];

function TransactionCtrl($scope, Transaction) {
    // var ctrl = this;
    $scope.sendTransForm = sendTransForm;

    $scope.recentTran = Transaction.posts;

    function sendTransForm() {
        Transaction.send($scope.transaction)
            .then(function(response, trans) {
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