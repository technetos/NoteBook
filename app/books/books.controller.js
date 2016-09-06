{
  angular.module('bookApp.books').controller('BooksController', BooksController);

  BooksController.$inject = ['$scope','BookDB'];
  function BooksController($scope,BookDB) {
    const vm = this;
    vm.books = BookDB.books;
  };
}
