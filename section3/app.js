/**
 * Created by ikkitakahashi on 2016/11/13.
 */

/**
 *  angular というグローバル変数が定義される。
 *  第二引数には、依存するモジュールを定義する。
 *
 *  ngMessagesの依存性を注入する。
 */
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// $log: ログサービスを使う。
// $resource:  ngResourceサービスを使う
myApp.controller('mainController', function($scope, $log, $filter, $resource) {

    $scope.name = 'ken';
    $scope.upperName = $filter('uppercase')($scope.name);

    $log.info($scope.name);
    $log.info($scope.upperName);

});