angular.module('manager').controller('addCustomerCtrl',function($scope,$rootScope,$location){
    $scope.username = "";
    $scope.addCustomer = function(){
        console.log($scope.username);
        // $location.path("/");
    }

    $scope.clearAll = function(){
        $scope.username = "";
    }
});
