define(['underscore', 'backbone', 'text!templates/contact-template.html'],
  function(_, Backbone, contactTemp) {

    var ContactView = Backbone.View.extend({

      tagName: 'li',
      template: _.template( contactTemp ),

      events: {
        'click .contact-div': 'setContact'
      },
      initialize: function( opt ) {
        this.parentView = opt.parentView;
      },
      render: function() {
        this.$el.html( this.template( this.model.attributes ) )
        return this;
      },
      setContact: function() {
        this.parentView.renderEdit( this.model );
      }

    })

    return ContactView;

})
