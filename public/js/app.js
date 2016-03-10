angular.module('myApp', ['ui.router'])
angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {


    $stateProvider

    .state('home',{
      url: '/home',
      controller: 'mainCtrl',
      templateUrl: '/html/home.html'
    })
   .state('products', {
      url: '/products',
      controller: 'mainCtrl',
      templateUrl: '/html/products.html'
  })
    .state('admin', {
      url: '/admin',
      controller: 'mainCtrl',
      templateUrl: '/html/admin.html'
  })
  $urlRouterProvider.otherwise('/home');

});
