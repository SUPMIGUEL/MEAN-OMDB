var app = angular.module("movieApp", []);

app.controller("movieController", function($scope,$http){

    $http.get('api/movies').then(function(res) {

    });

    $scope.search = function(movie){
        $http.get('http://www.omdbapi.com/', movie).then(function(res) {
            $scope.movies = res.data;
        });
    };
    
});