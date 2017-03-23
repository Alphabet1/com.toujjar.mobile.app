angular.module('starter.controllers', ['pascalprecht.translate'])

app.controller('home',function ($scope,$translate,$http, $location) {
     $scope.curlang = $translate.use();

    $scope.go = function(){
        //$location.url("/Categorie");
        $location.path("/Categorie");
     }
});

app
    .controller('settings',function ($scope,$translate) {
        $scope.curlang = $translate.use();
        $scope.changeLanguage = function(key) {
            $translate.use(key);
            $scope.curlang = key;
     };
}) ;


                           