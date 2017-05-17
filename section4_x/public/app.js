/**
 * Created by ikkitakahashi on 2016/11/13.
 */

/**
 *  angular というグローバル変数が定義される。
 *  第二引数には、依存するモジュールを定義する。
 *。
 */
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

    $scope.handle = '';
    $scope.lowercaseHandle = function () {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    
    $http.get('/api')
        .then(function(result) {
            $scope.rules = result.data;
        })
        .catch(function(err) {
            console.log(err);
        });
    
}]);