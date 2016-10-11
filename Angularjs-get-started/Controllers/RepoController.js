angular.module('myApp')
  .controller('RepoController', ['$scope','$routeParams', 'github', RepoController]);

function RepoController($scope, $routeParams, github) {
  var username = $routeParams.username;
  var reponame = $routeParams.repoName;

  var onRepo = function (data) {
    $scope.repo = data;
  };

  var onError = function (reason) {
    $scope.error = reason;
  };

  github.repoDetails(username, reponame)
    .then(onRepo, onError);
}
