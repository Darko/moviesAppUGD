app.controller('HomePageController', function ($state) {
  var vm = this;

  $state.go('home.main');
})

.controller('HomeMainController', function ($state) {
  var vm = this;

})
