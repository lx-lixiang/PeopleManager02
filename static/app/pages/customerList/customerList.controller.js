angular.module('manager').controller('costomerListCtrl',function($scope,$rootScope,$location,$http){
    $scope.customerList = [
        {name:"邱上哲",age:14,sex:"女"},
        {name:"邱上哲",age:14,sex:"女"},
        {name:"邱上哲",age:14,sex:"女"},
        {name:"邱上哲",age:14,sex:"女"},
        {name:"邱上哲",age:14,sex:"女"},
        {name:"邱上哲",age:14,sex:"女"},
        {name:"邱上哲",age:14,sex:"女"}
    ];
    // $http.get('pages/customerList/customerList.html').success(function(data){
    //     console.log(data);
    // });
});
