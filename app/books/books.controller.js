{
  angular.module('bookApp.books').controller('BooksController', BooksController);

  BooksController.$inject = ['$scope','Book'];
  function BooksController($scope,Book) {
    const vm = this;
    vm.books = Book.query();
  };
}
