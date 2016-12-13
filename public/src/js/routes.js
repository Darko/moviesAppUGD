app.config(function ($stateProvider) {
  $stateProvider
  .state('home', {
    url: '',
    templateUrl: '../../index.html',
    controller: 'HomePageController as vm'
  })
  .state('home.main', {
    url: '/index',
    templateUrl: '../../views/home.html',
    controller: 'HomeMainController as vm'
  })
  .state('home.resource', {
    url: '/details/:resourceId',
    templateUrl: '../../views/details.html',
    controller: 'ResourceDetailsController as vm'
  })

});
