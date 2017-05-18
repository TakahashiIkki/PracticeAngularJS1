/**
 * Created by ikkitakahashi on 2016/11/13.
 */

/**
 *  angular というグローバル変数が定義される。
 *  第二引数には、依存するモジュールを定義する。
 *。
 */
 // ngRouteを追加.
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController',
    })
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController',
    })
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController',
    });
    
});

myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log) {

    $scope.name = 'Main';
    
}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', function($scope, $location, $log, $routeParams) {

    $scope.name = $routeParams.num || 'hoge';
    
}]);