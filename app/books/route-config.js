{
  angular.module('bookApp.books').config(booksConfig);
  
  booksConfig.$inject = ['$stateProvider'];
  function booksConfig($stateProvider) {

    // this is the books lising part of the page, all available books will
    // be listed on the side bar created on this page and populated by
    // `booksLoaded`
    $stateProvider
    .state('books', {
      url:'/books',
      templateUrl:'books/books.html',
      controller:'BooksController',
      controllerAs:'vm',
      resolve: {
        booksLoaded:booksLoaded,
      },
    })

    .state('books.book', {
      url:'/:bookId',
      templateUrl:'books/book/book.html',
      controller:'BookController',
      controllerAs:'vm',
    });

    booksLoaded.$inject = ['Book'];
    function booksLoaded(Book) {
      //Book.loadBooks();
    };

  }
}
