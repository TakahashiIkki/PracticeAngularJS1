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
    
    var rulesRequest = new XMLHttpRequest();
    
    rulesRequest.onreadystatechange = function() {
        $scope.$apply(function () {
            if (rulesRequest.readyState == 4 && rulesRequest.status == 200) {
                $scope.rules = JSON.parse(rulesRequest.responseText);
            }
        });
    };
    
    rulesRequest.open('GET', 'http://udemy-angularjs-ja-ikkitang1211.c9users.io:8080/api', true);
    rulesRequest.send();
    
}]);