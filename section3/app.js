/**
 * Created by ikkitakahashi on 2016/11/13.
 */

/**
 *  angular というグローバル変数が定義される。
 *  第二引数には、依存するモジュールを定義する。
 */
var myApp = angular.module('myApp', []);

// $log: ログサービスを使う。
myApp.controller('mainController', function($scope, $log, $filter) {

    $scope.name = 'ken';
    $scope.upperName = $filter('uppercase')($scope.name);

    $log.info($scope.name);
    $log.info($scope.upperName);

});