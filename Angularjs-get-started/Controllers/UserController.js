angular.module('myApp')
    .controller('UserController', ['$scope', '$routeParams', '$location', 'github', UserController]);

function UserController($scope, $routeParams, $location, github) {



    var onUserComplete = function(data) {
        $scope.user = data;
        github.getRepos($scope.user)
          .then(onRepos, onError);
    };

    var onError = function(data) {
        $scope.fetchUserError = data.message;
    };

    var onRepos = function (data) {
      $scope.userRepos = data;
    };

    $scope.getRepoName = function (repoName) {
      $location.path('/repo/' + $scope.username + '/' + repoName);
    };

    $scope.username = $routeParams.username;
    $scope.message = "Hell from angular!";
    $scope.repoSort = "-stargazers_count";
    github.getUser($scope.username).then(onUserComplete, onError);

}
