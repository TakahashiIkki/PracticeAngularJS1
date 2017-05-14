/**
 * Created by ikkitakahashi on 2016/11/13.
 */

/**
 *  angular というグローバル変数が定義される。
 *  第二引数には、依存するモジュールを定義する。
 *。
 */
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {

    $scope.handle = '';
    $scope.lowercaseHandle = function () {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.$watch('handle', function(newValue, oldValue) {
        console.log('変化がありました');
        console.log('新：' + newValue);
        console.log('旧：' + oldValue);
    
    });

    // // AngularJsはこのSettimeOut内で起きた事をハンドリングしていない。
    // setTimeout(function() {
    //     $scope.handle = 'hogehogehoge';
    //     console.log('スコープが変わりました。');
    // }, 3000);

    // // Timeoutの解決方法１
    // setTimeout(function() {
        
    //     // Apply関数の中で実行する。
    //     // -> 普段書く必要は無いが、angularにハンドリングしてほしい為、明示的に記述。
    //     $scope.$apply(function() {
    //         $scope.handle = 'hogehogehoge';
    //         console.log('スコープが変わりました。');
    //     });
    // }, 3000);
    
    // Timeoutの解決方法2
    // Timeoutのサービスを使用する。
    $timeout(function() {
        $scope.handle = 'hogehogehoge';
        console.log('スコープが変わりました。');
    }, 3000);
}]);