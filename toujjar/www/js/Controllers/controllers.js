angular.module('starter.controllers', ['pascalprecht.translate'])

app.controller('home',function ($scope,$translate) {
     $scope.curlang = $translate.use();
});

app.controller('mobile',function ($scope,$translate) {
     $scope.curlang = $translate.use();
});

app.controller('settings',function ($scope,$translate) {
     $scope.curlang = $translate.use();
     $scope.changeLanguage = function(key) {
          $translate.use(key);
          $scope.curlang = key;
     };
})
