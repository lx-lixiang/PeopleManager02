angular.module('manager').controller('mainPageCtrl',function($scope,$rootScope){
    //1.今日信息
    $scope.baseInfo = {
        customerNum:120,
        addCustomer:50,
        addOrder:80,
        winner:'邱上哲'
    }
    //2.今日销售信息
    $scope.sellInfo = [
        {num:0075,name:'邱上哲',addCustomer:75,addOrder:15,score:80},
        {num:0028,name:'李响',addCustomer:55,addOrder:2,score:70},
        {num:0043,name:'桑鸿璐',addCustomer:21,addOrder:1,score:50},
        {num:0014,name:'刘天琪',addCustomer:11,addOrder:1,score:50},
        {num:0006,name:'路人甲',addCustomer:7,addOrder:0,score:10}
    ];
    //3.今日任务信息
    $scope.peopleTaskInfo = {
        target:150,
        actual:100
    }
    $scope.orderTaskInfo = {
        target:150,
        actual:20
    }
});
