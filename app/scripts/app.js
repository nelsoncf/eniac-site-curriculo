'use strict';

/**
 * @ngdoc overview
 * @name eniacSiteCurriculoApp
 * @description
 * # eniacSiteCurriculoApp
 *
 * Main module of the application.
 */
angular
  .module('eniacSiteCurriculoApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
