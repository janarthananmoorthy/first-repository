// Code goes here

var app = angular.module('app', ['kendo.directives']); 

 app.controller("myCtrl", function ($compile, $scope,$http,$log) {
  
  $scope.model={};
  $scope.model.data =[]; 
  $scope.model.data = [{
      "WorkOrderID": "1111",
      "ProductionOperationID": "c5c3ccfc-695a-46e2-8210-072161a6ac29",
      "Ischecked": false,
      "IsProductionOperation": true,
      "ConsumedArticleNo": [
        "MO116132- Material",
        "MO116132"
      ],
      "Status": 11,
      "RegisterMachineTime": 0,
      "RegisterOperatorTime": 0,
      "Priority": 0,
      "Sequence": 0,
      "PlannedDate": "2014-07-25T07:50:00.013Z",
      "No": 10105632,
      "WorkOrderCustomer": null,
      "Profession": null,
      "Description": null,
      "ProdOrdCustomer": "Statoil Petroleum AS",
      "TaskDescription": "",
      "Reference": "",
      "ProductionOrderNo": "V1430010",
      "ArticleDescription": "Plate",
      "ArticleNo": "MO116132",
      "ProjectNo": "36404",
      "Task": "Merking og Grading",
      "Resource": "2030"
    },
    {
      "WorkOrderID": "2222",
      "ProductionOperationID": "7ef27b5c-1f0e-496a-8829-ff8959765982",
      "Ischecked": false,
      "IsProductionOperation": true,
      "ConsumedArticleNo": [
        "MO116114- Material",
        "MO116114"
      ],
      "Status": 22,
      "RegisterMachineTime": 0,
      "RegisterOperatorTime": 0,
      "Priority": 0,
      "Sequence": 0,
      "PlannedDate": "2014-07-25T07:52:00.013Z",
      "No": 10105633,
      "WorkOrderCustomer": null,
      "Profession": null,
      "Description": null,
      "ProdOrdCustomer": "Statoil Petroleum AS",
      "TaskDescription": "",
      "Reference": "",
      "ProductionOrderNo": "V1430011",
      "ArticleDescription": "Plate",
      "ArticleNo": "MO116114",
      "ProjectNo": "36404",
      "Task": "Merking og Grading",
      "Resource": "2030"
    },
     {
         "WorkOrderID": "3333",
         "ProductionOperationID": "7ef27b5c-1f0e-496a-8829-ff8959765982",
         "Ischecked": true,
         "IsProductionOperation": true,
         "ConsumedArticleNo": [
         "MO116114- Material",
         "MO116114"
         ],
         "Status": 33,
         "RegisterMachineTime": 0,
         "RegisterOperatorTime": 0,
         "Priority": 0,
         "Sequence": 0,
         "PlannedDate": "2014-07-25T07:52:00.013Z",
         "No": 10105633,
         "WorkOrderCustomer": null,
         "Profession": null,
         "Description": null,
         "ProdOrdCustomer": "Statoil Petroleum AS",
         "TaskDescription": "",
         "Reference": "",
         "ProductionOrderNo": "V1430011",
         "ArticleDescription": "Plate",
         "ArticleNo": "MO116114",
         "ProjectNo": "36404",
         "Task": "Merking og Grading",
         "Resource": "2030"
     },
     {
         "WorkOrderID": "3333",
         "ProductionOperationID": "7ef27b5c-1f0e-496a-8829-ff8959765982",
         "Ischecked": true,
         "IsProductionOperation": true,
         "ConsumedArticleNo": [
         "MO116114- Material",
         "MO116114"
         ],
         "Status": 33,
         "RegisterMachineTime": 0,
         "RegisterOperatorTime": 0,
         "Priority": 0,
         "Sequence": 0,
         "PlannedDate": "2014-07-25T07:52:00.013Z",
         "No": 10105633,
         "WorkOrderCustomer": null,
         "Profession": null,
         "Description": null,
         "ProdOrdCustomer": "Statoil Petroleum AS",
         "TaskDescription": "",
         "Reference": "",
         "ProductionOrderNo": "V1430011",
         "ArticleDescription": "Plate",
         "ArticleNo": "MO116114",
         "ProjectNo": "36404",
         "Task": "Merking og Grading",
         "Resource": "2030"
     },
     {
         "WorkOrderID": "3333",
         "ProductionOperationID": "7ef27b5c-1f0e-496a-8829-ff8959765982",
         "Ischecked": true,
         "IsProductionOperation": true,
         "ConsumedArticleNo": [
         "MO116114- Material",
         "MO116114"
         ],
         "Status": 33,
         "RegisterMachineTime": 0,
         "RegisterOperatorTime": 0,
         "Priority": 0,
         "Sequence": 0,
         "PlannedDate": "2014-07-25T07:52:00.013Z",
         "No": 10105633,
         "WorkOrderCustomer": null,
         "Profession": null,
         "Description": null,
         "ProdOrdCustomer": "Statoil Petroleum AS",
         "TaskDescription": "",
         "Reference": "",
         "ProductionOrderNo": "V1430011",
         "ArticleDescription": "Plate",
         "ArticleNo": "MO116114",
         "ProjectNo": "36404",
         "Task": "Merking og Grading",
         "Resource": "2030"
     },
     {
     "WorkOrderID": "3333",
     "ProductionOperationID": "7ef27b5c-1f0e-496a-8829-ff8959765982",
     "Ischecked": true,
     "IsProductionOperation": true,
     "ConsumedArticleNo": [
     "MO116114- Material",
     "MO116114"
     ],
     "Status": 33,
     "RegisterMachineTime": 0,
     "RegisterOperatorTime": 0,
     "Priority": 0,
     "Sequence": 0,
     "PlannedDate": "2014-07-25T07:52:00.013Z",
     "No": 10105633,
     "WorkOrderCustomer": null,
     "Profession": null,
     "Description": null,
     "ProdOrdCustomer": "Statoil Petroleum AS",
     "TaskDescription": "",
     "Reference": "",
     "ProductionOrderNo": "V1430011",
     "ArticleDescription": "Plate",
     "ArticleNo": "MO116114",
     "ProjectNo": "36404",
     "Task": "Merking og Grading",
     "Resource": "2030"
     }];

    $scope.model.dataSource = new kendo.data.DataSource({
        data:$scope.model.data,
        batch: true,
        pageSize: 5,
        schema: {
            model: {
                id: "WorkOrderID",
                fields: {
                    'WorkOrderID':{editable:false}                        
                }
            }
        },
        serverPaging: false,
        serverFiltering: false,
        serverSorting: false
    });
    
    $scope.kOptions = {
        detailTemplate: kendo.template($('#usersAuditGridTemplate').html()),
        sortable: false
    };

    $scope.addRow=function(){
      var tmp=angular.fromJson('{"ProductID":21,"ProductName":"My Product","Supplier":{"SupplierID":1,"SupplierName":"Exotic Liquids"},"Category":{"CategoryID":1,"CategoryName":"Beverages"},"UnitPrice":40.0,"UnitsInStock":3,"Discontinued":true}');
      $scope.model.data.push(tmp);
      $scope.model.dataSource.read();
      //$scope.model.dataSource.add(tmp);
    };
});

