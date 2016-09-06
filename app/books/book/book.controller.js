{
  angular.module('bookApp.book').controller('BookController', BookController);

  BookController.$inject = ['$scope'];
  function BookController($scope) {
    const vm = this;
  };
}
