{
  angular.module('bookApp', [
      'ui.router',
      'ng.httpLoader',
      'ngResource',
      'btford.markdown',
      'bookApp.books',
      'bookApp.book'
  ]);
}

 /* config.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/books/');
  }

  run.$inject = ['$rootScope', '$state'];
  function run($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', () => {
      $rootScope.$state = $state;
    });
  }
}*/
