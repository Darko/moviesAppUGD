app.controller('HomePageController', function ($state) {
  var vm = this;

  $state.go('home.main');
})

.controller('HomeMainController', function ($state, $http) {
  var vm = this;

  vm.featured = {
    saying: 'Winter is coming',
    title: 'Game of Thrones',
    caption: 'Nine noble families fight for control over the mythical lands of Westeros. Meanwhile, a forgotten race, hell-bent on destruction, returns after being dormant for thousands of years.'
  }

  vm.resources = [];

  $http.get('/api/popular')
  .then(function (result) {
    vm.resources = result.data;
  });

  var resources = document.querySelector('.container.resources');
  console.log(resources);

  vm.slideLeft = function () {

  }

})
