angular.module('manager').controller('loginCtrl',function($scope,$rootScope,$location){
    $scope.username = '';
    $scope.password = '';
    $scope.login = function(){
        $rootScope.username = $scope.username;
        $rootScope.login = true;
        $rootScope.$emit('login');
    }
});
