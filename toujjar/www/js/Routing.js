angular.module('starter.Routing', ['pascalprecht.translate'])
'use strict'

app.config(function ($translateProvider) {
     $translateProvider.translations('en',translations_en);
     $translateProvider.translations('fr',translations_fr);
     $translateProvider.preferredLanguage('fr');
     $translateProvider.useSanitizeValueStrategy('sanitize');
     //console.log("$translateProvider bien initializer");
})


app.config(function($stateProvider,$urlRouterProvider){
     $stateProvider
         .state('home',{
               url: '/home',
               templateUrl: 'templates/home.html',
              controller:'homeCtrl'
     });
     $stateProvider
         .state('phone',{
          url: '/phone',
          templateUrl: 'templates/mobile.html',
          controller:'phoneCtrl'    

     });


    $stateProvider
        .state('Categorie',{
            url: '/Categorie',
            templateUrl: 'templates/Categorie.html' ,
            controller : 'categorieCtrl'
        });

     $stateProvider
         .state('settings',{
              url: '/settings',
              templateUrl: 'templates/settings.html',
              controller:'settingCtrl'

         });



     //la root  par defaut
     $urlRouterProvider.otherwise('/home')
});