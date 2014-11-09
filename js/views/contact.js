define(['underscore', 'backbone', 'text!templates/contact-template.html'],
  function(_, Backbone, contactTemp) {

    var ContactView = Backbone.View.extend({

      tagName: 'li',
      template: _.template( contactTemp ),

      render: function() {s
        this.$el.html( this.template( this.model.attributes ) )
        return this;
      }

    })

    return ContactView;

})
