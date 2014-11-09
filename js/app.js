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

require(['jquery', 'underscore', 'backbone', 'collections/contacts'],
  function($, _, Backbone, conCollection) {

    conCollection.fetch({reset: true, success: function() {


    }})


})
