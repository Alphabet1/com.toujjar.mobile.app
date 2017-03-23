/**
 * Created by EL Hadramy Ahmed on 19/03/2017.
 */
angular.module('starter.controllers', ['pascalprecht.translate'])
app.controller('categorieCtrl',function ($scope,$location) {
    var data = {
        availableOptions: [
            {id: '1', name: 'phone'},
            {id: '2', name: 'voiture'},
            {id: '3', name: 'maison'}
        ],
        selectedOption: {id: '3', name: 'phone'}  
    };

    var listCategorie = {
		 list: [
				{"id":"1", "cat":"MULTIMEDIA", "name":"Telephone"},
				{"id":"2", "cat":"MULTIMEDIA", "name":"Image&son"},
				{"id":"3", "cat":"MULTIMEDIA", "name":"Ordinateur"},
                {"id":"3", "cat":"MULTIMEDIA", "name":"Imprimente"},
				{"id":"4", "cat":"VEHICULE", "name":"voiture"},
                {"id":"4", "cat":"VEHICULE", "name":"Motos"},
                {"id":"3", "cat":"MAISON", "name":"Jardinage"},
                {"id":"3", "cat":"------", "name":"Auter"}
			],
			selectedOption : {"id":"", "cat":"", "name":""}
		 };
    $scope.listCategorie = listCategorie;
    $scope.data = data;

    
    $scope.choisie = function () {
        switch (listCategorie.selectedOption.name) {
            case "": alert("chaosie l'un des categorie.");
                break;
            case "Telephone":
                $location.url("/phone");
                break;
        }

    }
})  ;

