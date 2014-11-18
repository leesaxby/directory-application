define(['underscore', 'backbone', 'text!templates/contact-template.html'],
  function(_, Backbone, contactTemp) {

    var ContactView = Backbone.View.extend({

      tagName: 'li',
      template: _.template( contactTemp ),

      events: {
        'click .edit': 'setContact',
        'click .delete': 'deleteContact'
      },
      initialize: function( opt ) {
        this.parentView = opt.parentView;
        this.listenTo(this.model, 'change', this.render)
        this.listenTo(this.model, 'destroy', this.removeView)
      },
      render: function() {
        this.$el.html( this.template( this.model.attributes ) )
        this.visible();
        return this;
      },
      setContact: function() {
        this.parentView.renderEdit( this.model );
      },
      visible: function() {
        if(!this.model.attributes.visible) {
          this.$el.animate({
            height: '0px',
            marginBottom: '0px'
          }, {queue: false})

          this.$('.contact-div').css('opacity', '0')
        } else {
          this.$el.animate({
            height: '100px',
            marginBottom: '10px'
          }, {queue: false})
          this.$('.contact-div').css('opacity', '1')
        }
      },
      deleteContact: function() {
        this.model.destroy();
      },
      removeView: function() {
        var self = this;
        this.$('.contact-div').animate({
            opacity:'0'
        }, function() {
            self.remove();
        });
      }

    })

    return ContactView;

})
