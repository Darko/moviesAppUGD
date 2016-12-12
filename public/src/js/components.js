app
.component('navbar', {
  templateUrl: '../../components/navbar.html',
  controllerAs: '$ctrl',
  controller: function () {
    var $ctrl = this;
  }
})
.component('featuredContent', {
  templateUrl: '../../components/featuredContent.html',
  controllerAs: '$ctrl',
  bindings: {
    resource: '='
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.dialog = {
      isOpen: false
    }

    $ctrl.playTrailer = function () {
      $ctrl.dialog.isOpen = true;
    }

  }
})
.component('resourceCard', {
  templateUrl: '../../components/resourceCard.html',
  bindings: {
    resource: '='
  },
  controllerAs: '$ctrl',
  controller: function () {
    var $ctrl = this;
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
