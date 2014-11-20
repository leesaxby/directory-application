define(['backbone'], function(Backbone) {

  var AppRouter = Backbone.Router.extend({

    initialize: function(opt) {
      this.parentView = opt.parentView;
    },
    routes: {
      'search/:str': 'searchStr'
    },
    searchStr: function(str) {
      $('#search').val(str).trigger('keyup');
    }

  });

  return AppRouter;

});
