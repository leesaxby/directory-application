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
      var mod = conCollection.get({id: "1"});

      console.log(mod.attributes.tel)
      mod.destroy({id: "2"})
      console.log(mod.attributes.tel)

    }})


})
