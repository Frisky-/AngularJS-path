angular.module('appName', [])
    .controller('MainController', ['$scope', '$http', MainController]);

function MainController($scope, $http) {

    var onUserComplete = function(response) {
        $scope.user = response.data;
        console.log($scope.user);
    };

    var onUserFail = function (response) {
      $scope.fetchUserError = "Couldn't fetch the user."
    }

    $http.get('https://api.github.com/users/robconery')
        .then(onUserComplete, onUserFail)
    $scope.message = "Hell from angular!";

}
