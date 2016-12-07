app.config(function ($stateProvider) {
  $stateProvider
  .state('home', {
    url: '',
    templateUrl: '../../index.html',
    controller: 'HomePageController as vm'
  })
  .state('home.main', {
    url: '/home',
    templateUrl: '../../views/home.html',
    controller: 'HomeMainController as vm'
  })

});
