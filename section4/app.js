/**
 * Created by ikkitakahashi on 2016/11/13.
 */

/**
 *  angular というグローバル変数が定義される。
 *  第二引数には、依存するモジュールを定義する。
 *。
 */
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

    $scope.handle = '';
    $scope.lowercaseHandle = function () {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    
    $scope.rules = [
        {rulename: '5文字でなければいけません'},
        {rulename: 'まだ使われていないものでなければいけません'},
        {rulename: '格好いいハンドルネームにしてください'},
    ];
    
    console.log($scope.rules);
}]);