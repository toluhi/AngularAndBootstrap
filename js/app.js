/**
 * Created by yemi-t on 29/06/2014.
 */
var app = angular.module('AngBoot', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {templateUrl: './partials/login.html', controller: 'loginController'});

    $routeProvider.otherwise({redirectTo: '/login'});
}]);
