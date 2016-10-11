angular.module('myApp')
    .controller('MainController', ['$scope', '$interval', '$location', MainController]);

function MainController($scope, $interval, $location) {

    $scope.getUsername = function(username) {
        if(countdownInterval){
          $interval.cancel(countdownInterval);
          $scope.countdown = null;
        }
        $location.path('/user/' + username);
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


    $scope.countdown = 5;
    startCountdown();
}
