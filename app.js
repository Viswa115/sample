var app=angular.module("firstapp",[]);
    app.controller("ctrl",function($scope){
    $scope.name="Viswa";
    $scope.changePage=function(){
        alert("This is done using ng-click.This page is done for demonstration purpose.");
    }
    });