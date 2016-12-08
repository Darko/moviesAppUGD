app.controller('HomePageController', function ($state) {
  var vm = this;

  $state.go('home.main');
})

.controller('HomeMainController', function ($state, $http) {
  var vm = this;

  vm.resources = [
    {
      title: 'Game of Thrones',
      caption: 'Nine noble families fight for control over the mythical lands of Westeros. Meanwhile, a forgotten race, hell-bent on destruction, returns after being dormant for thousands of years.',
      preview: 'http://www.geek.com/wp-content/uploads/2016/07/nedstark-625x350.jpg',
    },
    {
      title: 'Game of Thrones',
      caption: 'Nine noble families fight for control over the mythical lands of Westeros. Meanwhile, a forgotten race, hell-bent on destruction, returns after being dormant for thousands of years.',
      preview: 'http://www.geek.com/wp-content/uploads/2016/07/nedstark-625x350.jpg',
    },
    {
      title: 'Game of Thrones',
      caption: 'Nine noble families fight for control over the mythical lands of Westeros. Meanwhile, a forgotten race, hell-bent on destruction, returns after being dormant for thousands of years.',
      preview: 'http://www.geek.com/wp-content/uploads/2016/07/nedstark-625x350.jpg',
    },
    {
      title: 'Game of Thrones',
      caption: 'Nine noble families fight for control over the mythical lands of Westeros. Meanwhile, a forgotten race, hell-bent on destruction, returns after being dormant for thousands of years.',
      preview: 'http://www.geek.com/wp-content/uploads/2016/07/nedstark-625x350.jpg',
    },
    {
      title: 'Game of Thrones',
      caption: 'Nine noble families fight for control over the mythical lands of Westeros. Meanwhile, a forgotten race, hell-bent on destruction, returns after being dormant for thousands of years.',
      preview: 'http://www.geek.com/wp-content/uploads/2016/07/nedstark-625x350.jpg',
    },
    {
      title: 'Game of Thrones',
      caption: 'Nine noble families fight for control over the mythical lands of Westeros. Meanwhile, a forgotten race, hell-bent on destruction, returns after being dormant for thousands of years.',
      preview: 'http://www.geek.com/wp-content/uploads/2016/07/nedstark-625x350.jpg',
    },
    {
      title: 'Game of Thrones',
      caption: 'Nine noble families fight for control over the mythical lands of Westeros. Meanwhile, a forgotten race, hell-bent on destruction, returns after being dormant for thousands of years.',
      preview: 'http://www.geek.com/wp-content/uploads/2016/07/nedstark-625x350.jpg',
    },
    {
      title: 'Game of Thrones',
      caption: 'Nine noble families fight for control over the mythical lands of Westeros. Meanwhile, a forgotten race, hell-bent on destruction, returns after being dormant for thousands of years.',
      preview: 'http://www.geek.com/wp-content/uploads/2016/07/nedstark-625x350.jpg',
    },
    {
      title: 'Game of Thrones',
      caption: 'Nine noble families fight for control over the mythical lands of Westeros. Meanwhile, a forgotten race, hell-bent on destruction, returns after being dormant for thousands of years.',
      preview: 'http://www.geek.com/wp-content/uploads/2016/07/nedstark-625x350.jpg',
    },
    
  ]

})
