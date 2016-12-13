app.controller('HomePageController', function ($state) {
  var vm = this;

  $state.go('home.main');
})

.controller('HomeMainController', function ($state, $http, $scope) {
  var vm = this;

  vm.featured = {};
  vm.resources = [];
  var translateRatio;

  $http.get('/api/popular')
  .then(function (result) {
    vm.resources = result.data;
    vm.featured = vm.resources[0];
    translateRatio = vm.resources.length * (280 + 32);
  });

  var resources = document.querySelector('.container.resources');
  var translated = 0;

  vm.buttonAction = {
    slideLeft: function (state) {
      if (state === 'disabled') return;
      translated -= 1;
      if(-translated * 270 === -translateRatio) return translated = 0;
      resources.style.transform = `translateX(${translated * 270}px)`;
    },
    slideRight: function (state) {
      if (state === 'disabled') return;
      translated += 1;
      if(translated * 270 === translateRatio) return translated = 0;
      return resources.style.transform = `translateX(${translated * 270}px)`;
    }
  }

  $scope.$on('post:movie', function (event, data) {
    console.log(data);
    vm.resources.push(data);
  })
})
.controller('ResourceDetailsController', function ($stateParams) {
  var vm = this;

  
})
