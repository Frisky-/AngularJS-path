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

       var repoDetails = function (username, reponame) {
         var repo;
         var url = 'https://api.github.com/repos/' + username + '/' + reponame;

         return $http.get(url)
          .then(function (response) {
            repo = response.data;
            return $http.get(url + '/contributors');
          })
          .then(function (response) {
            repo.contributors = response.data;
            return repo;
          });
       };

       return {
           getUser: getUser,
           getRepos: getRepos,
           repoDetails: repoDetails
       };
   }
