angular.module('manager').config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'pages/mainPage/mainPage.html'
    })
    .when('/customerList',{
        templateUrl:'pages/customerList/customerList.html'
    });
});
