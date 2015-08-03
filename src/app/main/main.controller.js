'use strict';

angular.module('reelRotten')
  .controller('MainCtrl', function ($scope) {
    $scope.values = [20, 80];

    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
