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

    $scope.data = data;
    $scope.choisie = function () {
        switch (data.selectedOption.name) {
            case "phone":
                $location.url("/phone");
                break;
        }

    }
})  ;

