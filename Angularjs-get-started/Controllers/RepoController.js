angular.module('myApp')
  .controller('RepoController', ['$scope','$routeParams', 'github', RepoController]);

function RepoController($scope, $routeParams, github) {
  $scope.username = $routeParams.username;
  $scope.repoName = $routeParams.repoName;

  var getIssues = function () {
    github.getSingleRepo($scope.username, $scope.repoName)
      .then(function (data, onError) {
        $scope.openIssues = data.open_issues_count;
      });
  }();

  var getContributors = function () {
    github.getRepoContributors($scope.username, $scope.repoName)
      .then(function (data, err) {
        console.log(data);
        $scope.contributors = data;
      });
  }();
}
