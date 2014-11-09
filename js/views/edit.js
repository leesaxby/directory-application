define(['jquery', 'underscore', 'backbone', 'text!templates/edit-template.html'],
  function($, _, Backbone, editTemp) {

  var EditView = Backbone.View.extend({

    template: _.template( editTemp ),

    render: function() {
      this.$el.html( this.template( this.model.attributes ) );
      return this;
    }

  });

  return EditView;

})
