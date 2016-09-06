{
  angular.module('bookApp.books').service('BookDB', BookDB);

  function BookDB() {
    
    const service = {
      books: [],
      loadBooks:loadBooks,
    };

    return service;

    ///////////////////////////
    
    function loadBooks() {
      service.books.push({"title":"C++","content":"abc123"});
    }
  }
}
