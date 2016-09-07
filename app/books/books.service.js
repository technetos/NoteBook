{
  angular.module('bookApp.books').factory('Book', Book);

  Book.$inject = ['$resource','API'];
  function Book($resource, API) {
    return $resource(`${API}books/:id`, null);
  }
}
   
/*const service = {
      books: r[],
      loadBooks:loadBooks,
    };

    return service;

    ///////////////////////////
    
    function loadBooks() {

      service.books.push({"title":"C++","content":"abc123"});
    }
  }
}*/
