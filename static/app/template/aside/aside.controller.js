angular.module('manager').controller('asideCtrl',function($scope,$rootScope,$location){
    //1.定义当前用户权限
    $scope.permissionId = 2;//1-主管 2-销售人员
    //2.定义当前进入服务的人员
    $rootScope.$on('login',function(){
        $scope.userName = $rootScope.username;
    });
    //3.定义当前列表中的选项
    $scope.chooseIndex = 0;//当前选择的是第几个大选项从0开始
    //点击大列表
    $scope.chooseBigItem = function(index){
        $scope.asideListItem[index].choose = !$scope.asideListItem[index].choose;
        $scope.chooseIndex = index;
    }
    //点击大列表下面的小项
    $scope.chooseSmallItem = function(index,fatherIndex){
        for(var bigItem in $scope.asideListItem){
            for(smallItem in $scope.asideListItem[bigItem].items){
                $scope.asideListItem[bigItem].items[smallItem].choose = false;
            }
        }
        $scope.asideListItem[fatherIndex].items[index].choose = true;
        $location.path($scope.asideListItem[fatherIndex].items[index].link);
    }
    $scope.asideListItem = [
        {
            title:"客户管理",
            choose:false,
            permission:0,//0-都可以看到 其他-对应permissionId
            items:[
                {title:"客户列表",choose:false,link:"/customerList"},
                {title:"登记客户",choose:false}
            ]
        },
        {
            title:"商品管理",
            choose:false,
            permission:0,//0-都可以看到 其他-对应permissionId
            items:[
                {title:"商品列表",choose:false},
                {title:"添加商品",choose:false},
                {title:"商品分类",choose:false},
                {title:"库存管理",choose:false}
            ]
        },
        {
            title:"员工管理",
            choose:false,
            permission:0,//0-都可以看到 其他-对应permissionId
            items:[
                {title:"员工列表",choose:false},
                {title:"员工登记",choose:false}
            ]
        },
        {
            title:"活动管理",
            choose:false,
            permission:0,//0-都可以看到 其他-对应permissionId
            items:[
                {title:"活动列表",choose:false},
                {title:"添加活动",choose:false},
                {title:"活动查询",choose:false}
            ]
        },

    ];

    if($scope.permissionId == 1) {$scope.permissionName = "主管";}
    else if($scope.permissionId == 2) {$scope.permissionName = "";}

    $rootScope.$on('$routeChangeSuccess', function (obj,load) {
        if(load.loadedTemplateUrl == "pages/mainPage/mainPage.html"){
            for(var bigItem in $scope.asideListItem){
                for(smallItem in $scope.asideListItem[bigItem].items){
                    $scope.asideListItem[bigItem].items[smallItem].choose = false;
                }
            }
        }
    });
});
