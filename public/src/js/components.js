app
.component('navbar', {
  templateUrl: '../../components/navbar.html',
  controller: function() {
    var vm = this;
  },
  controllerAs: 'vm'
})
.component('featuredContent', {
  templateUrl: '../../components/featuredContent.html',
  controller: function () {
    var vm = this;
  },
  controllerAs: 'vm'
})
.component('resourceCard', {
  templateUrl: '../../components/resourceCard.html',
  bindings: {
    resource: '='
  },
  controller: function () {
    var vm = this;

    console.log(vm.resource);

  },
  controllerAs: 'vm'
})
