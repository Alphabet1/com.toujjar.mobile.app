angular.module('starter.Routing', ['pascalprecht.translate'])
'use strict'

app.config(function ($translateProvider) {
     $translateProvider.translations('en',translations_en);
     $translateProvider.translations('fr',translations_fr);
     $translateProvider.preferredLanguage('fr');
     $translateProvider.useSanitizeValueStrategy('sanitize');
     console.log("$translateProvider bien initializer");
})
app.config(function($stateProvider,$urlRouterProvider){
     $stateProvider
         .state('home',{
               url: '/home',
               templateUrl: 'templates/home.html',
              controller:'home'
     });
     $stateProvider
         .state('mobile',{
          url: '/mobile',
          templateUrl: 'templates/mobile.html',
          controller:'mobile'    

     });

     $stateProvider
         .state('settings',{
              url: '/settings',
              templateUrl: 'templates/settings.html',
              controller:'settings'

         });

     //la root  par defaut
     $urlRouterProvider.otherwise('/home')
});