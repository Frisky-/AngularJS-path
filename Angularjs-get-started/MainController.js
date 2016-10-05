angular.module('appName', [])
    .controller('MainController', ['$scope', '$http', MainController]);

function MainController($scope, $http) {

    $scope.getUsername = function(username) {
        $http.get('https://api.github.com/users/' + username)
            .then(onUserComplete, onError);
    };


    var onUserComplete = function(response) {
        $scope.user = response.data;
        $http.get($scope.user.repos_url)
          .then(onRepos, onError);
    };

    var onError = function(response) {
        $scope.fetchUserError = response.data.message;
    };

    var onRepos = function (response) {
      $scope.userRepos = response.data;
      console.log($scope.userRepos);
    };


    $scope.message = "Hell from angular!";
    $scope.repoSort = "-stargazers_count";

}
