require.config({
  paths: {
    'jquery': 'lib/jquery',
    'underscore': 'lib/underscore',
    'backbone': 'lib/backbone',
    'text': 'lib/text'
  },
  shim: {
    'underscore': {
      deps: ['jquery'],
      exports: '_'
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }
})

require(['jquery', 'underscore', 'backbone', 'views/app'],
  function($, _, Backbone, AppView) {

    var appView = new AppView();
    console.log(appView)
    $('#directoryapp').html( appView.render().el );


})
