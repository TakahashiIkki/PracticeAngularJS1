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

searchPeopleString = searchPeople.toString();

// 関数の定義そのものが文字列として定義出来る。
// => 引数をパースできれば、どんな引数が必要なのかがわかる。
console.log(searchPeopleString);