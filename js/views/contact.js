define(['underscore', 'backbone', 'text!templates/contact-template.html'],
  function(_, Backbone, contactTemp) {

    var ContactView = Backbone.View.extend({

      tagName: 'li',
      template: _.template( contactTemp ),

      events: {
        'click .edit': 'setContact',
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
          //this.$el.fadeOut();
          //
          this.$el.animate({
            height: '0px'
          }, {queue: false})

          this.$('.contact-div').animate({
            opacity: '0'
          }, {queue: false})


        } else {
          //this.$el.fadeIn();

          this.$el.animate({
            height: '100px'
          }, {queue: false})

          this.$('.contact-div').animate({
            opacity: '1'
          }, {queue: false})


        }
      },
      removeView: function() {

     //   this.$('.contact-div').css("margin", "0px");
       this.$('.contact-div').animate({
          left:'20px',
          opacity:'0'
        }, function() {
          this.remove();
        });

      }

    })

    return ContactView;

})
