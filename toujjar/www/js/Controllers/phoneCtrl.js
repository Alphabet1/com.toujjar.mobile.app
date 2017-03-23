angular.module('starter.controllers', ['pascalprecht.translate'])
app.controller('phoneCtrl',function ($scope,$translate,$http,phoneService) {
     $scope.curlang = $translate.use();

	  var villes = {
        list: [
            {id: '1', name: 'nktt'},
            {id: '2', name: 'ndb'},
            {id: '3', name: 'atar'}
        ],
        selectedOption: {id: '3', name: 'nktt'}  
    };

	$scope.phoneNumbr = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;

     	var phone = {
			"idPhone":null,
				"marque": "",
				"memoire":null ,
				"camera": null,
				"coulleur": '',
				"isDuos": '',
				"isNeuf": "",
				"prix": null,
				"ville": "",
				"email": null,
				"phone1": null,
				"image1": null,
				"image2": null,
				"image3": null,
				"image1": null,
				"model": null,
				"trader_name": null,
				"trader_facebook": null,
				"trader_insta": null,
				"temps": null,
				"img_count": 7,
				"password": null
			};  
	
	//Initialisation
	$scope.phone = phone;
	$scope.villes = villes;
	$scope.addPhone = function(img){
       // fd = new FormData();
		if(!img)
			return;
		phone.image1 = img[0].resized.dataURL;
		phone.image2 = img[1].resized.dataURL;
		phone.image3 = img[2].resized.dataURL;
		phone.image4 = img[3].resized.dataURL;
		phone.password = md5.createHash($scope.phone.password);		
		phone.ville = villes.selectedOption.name;
		

		console.log(img.length);
		
		console.log(phone);
		//console.log(img[0].resized.dataURL);
		
		//Uploading phone data object
        phoneService.postData(phone);
	}
});
