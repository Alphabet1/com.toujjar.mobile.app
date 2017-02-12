angular.module('starter.controllers', ['pascalprecht.translate'])

app.controller('home',function ($scope,$translate,$http) {
     $scope.curlang = $translate.use();
     //fetch data
     $http.get("http://localhost/mobileRestApi/list.php")
            .success(function (data) {
                $scope.phone = data;
            })
            .error(function (eror) {
                console.log(eror);
    })
});

app.controller('mobile',function ($scope,$translate,$http) {
     $scope.curlang = $translate.use();

     	var phone = {
		'marque' : '',
		'camera' : '',
		'memoire': '',
		'couleur':'',
		'isNeuf':'',
		'isDuos':'',
		'phone':'',
		'prix':'',
		'ville':'',
		'email':'',
		'image':''
	}
	$scope.phone = phone;
	$scope.addPhone = function(){
		 $http({
                method:'POST',
                url:"http://localhost/mobileRestApi/add.php",
                data:phone,
                headers:{
                  "Access-Control-Allow-Origin" : "*",
                  "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
                  "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                }
         })
		 .success(function () {
                alert("success");
            })
            .error(function (eror) {
                console.log(eror);
            })
	}

});

app.controller('settings',function ($scope,$translate) {
     $scope.curlang = $translate.use();
     $scope.changeLanguage = function(key) {
          $translate.use(key);
          $scope.curlang = key;
     };
})
