angular.module('myApp', [])
    .controller('MainController', ['$scope', '$http', '$interval', '$log', 'github', MainController]);

function MainController($scope, $http, $interval, $log, github) {

    $scope.getUsername = function(username) {
        $log.info('topkek');
        github.getUser(username)
          .then(onUserComplete, onError);
        if(countdownInterval){
          $interval.cancel(countdownInterval);
          $scope.countdown = null;
        }
    };


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

    var decrementCountdown = function () {
      $scope.countdown -= 1;
      if($scope.countdown < 1) {
        $scope.getUsername($scope.username);
      }
    };

    var countdownInterval = null;
    var startCountdown = function () {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };


    $scope.message = "Hell from angular!";
    $scope.repoSort = "-stargazers_count";
    $scope.countdown = 5;
    startCountdown();
}
