angular.module('manager').controller('asideCtrl',function($scope,$rootScope){
    //1.定义当前用户权限
    $scope.permissionId = 2;//1-主管 2-销售人员
    //2.定义当前进入服务的人员
    $scope.userName = '邱上哲';
    //3.定义当前列表中的选项
    $scope.chooseIndex = 0;//当前选择的是第几个大选项从0开始
    $scope.chooseBigItem = function(index){
        $scope.chooseIndex = index;
    }
    $scope.asideListItem = [
        {
            title:"商品管理",
            permission:0,//0-都可以看到 其他-对应permissionId
            items:[
                {title:"商品列表",choose:true},
                {title:"添加商品",choose:false},
                {title:"商品分类",choose:false},
                {title:"库存管理",choose:false}
            ]
        },
        {
            title:"客户列表",
            permission:0,//0-都可以看到 其他-对应permissionId
            items:[
                {title:"客户列表",choose:true},
                {title:"客户列表",choose:false},
                {title:"客户列表",choose:false},
                {title:"客户列表",choose:false}
            ]
        },
        {
            title:"员工列表",
            permission:0,//0-都可以看到 其他-对应permissionId
            items:[
                {title:"员工列表",choose:true},
                {title:"员工列表",choose:false},
                {title:"员工列表",choose:false},
                {title:"员工列表",choose:false}
            ]
        },
        {
            title:"什么列表",
            permission:0,//0-都可以看到 其他-对应permissionId
            items:[
                {title:"什么列表",choose:true},
                {title:"什么列表",choose:false},
                {title:"什么列表",choose:false},
                {title:"什么列表",choose:false}
            ]
        },

    ];

    if($scope.permissionId == 1) {$scope.permissionName = "主管";}
    else if($scope.permissionId == 2) {$scope.permissionName = "";}


});
