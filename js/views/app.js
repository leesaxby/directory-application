define(['jquery', 'underscore', 'backbone', 'collections/contacts', 'text!templates/app-template.html'],
  function($, _, Backbone, conCollection, appTemplate) {

    var AppView = Backbone.View.extend({

      template: _.template( appTemplate ),

      initialize: function() {
        conCollection.fetch({reset: true});
      },
      render: function() {
        this.$el.html( this.template() );
        return this;
      }

    });

    return AppView;

});
