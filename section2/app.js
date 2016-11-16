/**
 * Created by ikkitakahashi on 2016/11/13.
 */

/**
 *  angular というグローバル変数が定義される。
 *  第二引数には、依存するモジュールを定義する。
 */
var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {

    // $scope 変数に 自分で定義した変数を追加出来る。
    $scope.name = '山田太郎';
    $scope.hobby = '釣り';

    // 関数も追加出来る。
    $scope.getName = function () {
        return '山田';
    };

    console.log($scope);

});