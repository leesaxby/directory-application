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
        this.listenTo(this.model, 'change', this.visible)
      },
      render: function() {
        this.$el.html( this.template( this.model.attributes ) )
        return this;
      },
      setContact: function() {
        this.parentView.renderEdit( this.model );
      },
      visible: function() {
        if(!this.model.attributes.visible) {
          this.$el.css("display","none");
        } else {
          this.$el.css("display","block");
        }
      }

    })

    return ContactView;

})
