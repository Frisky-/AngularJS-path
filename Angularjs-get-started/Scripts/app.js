(function functionName() {
  'use strict';
  angular.module('myApp',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/main', {
          templateUrl: 'Views/main.html',
          controller: 'MainController'
        })
        .when('/user/:username', {
          templateUrl: 'Views/user.html',
          controller: 'UserController'
        })
        .when('/repo/:username/:repoName', {
          templateUrl: 'Views/repo.html',
          controller: 'RepoController'
        })
        .otherwise({redirectTo:'/main'});
    });

}());
