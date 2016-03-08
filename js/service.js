angular.module('myApp').service('mySvc', function($scope){

  $scope.getData = function(){
    return $http.get('/api/products')
  }
})
