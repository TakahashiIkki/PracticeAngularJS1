/**
 * Created by ikkitakahashi on 2016/11/13.
 */

/**
 *  angular というグローバル変数が定義される。
 *  第二引数には、依存するモジュールを定義する。
 */
var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {

});

var searchPeople = function (firstName, lastName, height, age, hobby) {
    return '山田  太郎';
};

// 引数の名前がStringの配列になって、出力される。
console.log(angular.injector().annotate(searchPeople));