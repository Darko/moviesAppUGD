app
.component('navbar', {
  templateUrl: '../../components/navbar.html',
  controllerAs: '$ctrl',
  controller: function ($http, $rootScope) {
    var $ctrl = this;

    var sixpack = document.querySelector('body');

    $ctrl.updateBody = function () {
      if ($ctrl.showModal) {
        sixpack.classList.add('disable-scroll');
      } else {
        sixpack.classList.remove('disable-scroll');
      }
    }

    $ctrl.open = function () {
      $ctrl.showModal = true;
      $ctrl.updateBody();
    }

    $ctrl.close = function () {
      $ctrl.showModal = false;
      $ctrl.updateBody();
    }

    $ctrl.submit = function () {
      $http.post('/api/resource', $ctrl.data)
      .then(function (response) {
        $rootScope.$emit('post:movie', response);
        $ctrl.close();
      });
    }

  }
})
.component('featuredContent', {
  templateUrl: '../../components/featuredContent.html',
  controllerAs: '$ctrl',
  bindings: {
    resource: '='
  },
  controller: function ($scope) {
    var $ctrl = this;

    $ctrl.dialog = {
      isOpen: false
    }

    $ctrl.playTrailer = function () {
      $ctrl.dialog.isOpen = true;
    }

    $scope.$on('movie', function (event, data) {
      $ctrl.resource = data;
    });

  }
})
.component('resourceCard', {
  templateUrl: '../../components/resourceCard.html',
  bindings: {
    resource: '='
  },
  controllerAs: '$ctrl',
  controller: function ($rootScope) {
    var $ctrl = this;

    $ctrl.playTrailer = function () {
      $rootScope.$broadcast('movie', $ctrl.resource);
    }

  }
})
.component('dialogPlayer', {
  templateUrl: '../../components/dialogPlayer.html',
  bindings: {
    video: '<',
    settings: '='
  },
  controllerAs: '$ctrl',
  controller: function () {
    var $ctrl = this;

    $ctrl.close = function () {
      $ctrl.settings.isOpen = false;
    }

  }
})
