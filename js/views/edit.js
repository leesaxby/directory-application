define(['jquery', 'underscore', 'backbone', 'text!templates/edit-template.html'],
  function($, _, Backbone, editTemp) {

  var EditView = Backbone.View.extend({

    template: _.template( editTemp ),

    events: {
      'click .save': 'saveContact',
      'click .delete': 'deleteContact'
    },
    render: function() {
      this.$el.html( this.template( this.model.attributes ) );
      return this;
    },
    saveContact: function() {
      var formData = {};
      this.$('.edit-form').children('input').each(function(input) {
        formData[ $(this).prop('class') ] = $(this).val();
      });
      this.model.save(formData)
    },
    deleteContact: function() {
      this.model.destroy();
    }

  });

  return EditView;

})
