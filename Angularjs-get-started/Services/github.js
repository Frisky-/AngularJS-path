   angular.module('myApp')
       .factory('github', ['$http', github]);

   function github($http) {

       var getUser = function(username) {
           return $http.get('https://api.github.com/users/' + username)
               .then(function(response) {
                   return response.data;
               });
       };

       var getRepos = function(user) {
           return $http.get(user.repos_url)
               .then(function(response) {
                   return response.data;
               });
       };

       var getSingleRepo = function (username, repoName) {
         return $http.get('https://api.github.com/repos/' + username + '/' + repoName)
          .then(function (response) {
            return response.data;
          });
       };

       var getRepoContributors = function (username, repoName) {
         return $http.get('https://api.github.com/repos/' + username + '/' + repoName + '/contributors')
          .then(function (response) {
            return response.data;
          });
       };

       return {
           getUser: getUser,
           getRepos: getRepos,
           getSingleRepo: getSingleRepo,
           getRepoContributors: getRepoContributors
       };
   }
