angular.module('manager').controller('staffListCtrl',function($scope,$rootScope){
    $scope.staffList = [
        {
            name:'邱上哲',number:0014,sex:"男",idCard:"232303199310241012",phone:"18088071886",nation:"汉族",birth:"1993-10-24",
            entry:"2016-10-05",position:"web开发人员",
            detail:{
                worktime:"3",//工作年限 3年
                detailEndTime:"2018-10-03",//合同到期事件
                isFormal:"true",//是否是正式员工 是 或者是试用期
                edu:"硕士",
                from:"黑龙江省肇东市",
                live:"北京市昌平区融泽嘉园12号院4号楼2单元901"
            }
        },
        {
            name:'李响',number:0015,sex:"女",idCard:"232303199310241012",phone:"18088701892",nation:"汉族",birth:"1991-08-26",
            entry:"2016-03-22",position:"销售助理",
            detail:{
                worktime:"2",//工作年限 3年
                detailEndTime:"2017-10-03",//合同到期事件
                isFormal:"false",//是否是正式员工 是 或者是试用期
                edu:"本科",
                from:"云南省昆明市",
                live:"北京市昌平区融泽嘉园12号院4号楼2单元901"
            }
        }
    ];
    $scope.showDetail = function(index){
        $scope.detailItem = $scope.staffList[index].detail;
    }
});
