'use strict';

var myApp = angular.module('myApp', []);

myApp.controller('CaseController', ['$scope', 'CaseFactory', function ($scope, CaseFactory) {

    $scope.titleCase = CaseFactory.titleCase("Title Factory Example");
    $scope.camelCase = CaseFactory.camelCase("CamelCase Factory Example");
    $scope.dashCase = CaseFactory.dashCase("Dash-Case Factory Example");

}]);



myApp.filter('nameFilter', function () {

    return function (input) {
        return input.lastName + ", " + input.firstName;
    };
});


myApp.directive('loginForm', [function () {

    return {
        restrict: 'EA',
        templateUrl: 'login-form.html',
        scope: {
            title: '=title'
        },
        link: function (scope, element, attrs) {
            scope.loginTitle = attrs.title;
        }
    }
}]);