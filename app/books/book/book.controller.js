{
  angular.module('bookApp.book').controller('BookController', BookController);

  BookController.$inject = ['$scope','BookDB'];
  function BookController($scope, BookDB) {
    const vm = this;
    vm.book = get();

    ///////
    
    function get() {
      if($state.params.bookId) {
        return BookDB.get({ id:$state.params.bookId });
      }
      // else
      return new BookDB();
    }

  };
}
