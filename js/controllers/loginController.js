/**
 * Created by yemi-t on 29/06/2014.
 */
app.controller('loginController', ['$scope', '$location', function($scope, $location){
 $scope.signin = function($scope)
 {
     $location.path('/events');
 };
}]);

