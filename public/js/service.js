angular.module('myApp').service('mySvc', function( $http){

  this.getProduct = function(){
    return $http.get('/api/products');
  };
  this.addProduct = function(product){
    return $http.post('/api/products', product);

  };
  this.updateProduct = function(id, update){
    return $http.update('/api/products' + id, update);
  };
  this.deleteProduct = function(id){
    return $http.delete('/api/products' + id);
  }


})
