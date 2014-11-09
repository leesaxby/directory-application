define(['jquery', 'underscore', 'backbone', 'collections/contacts', 'views/contact', 'text!templates/app-template.html'],
  function($, _, Backbone, conCollection, ContactView, appTemplate) {

    var AppView = Backbone.View.extend({

      template: _.template( appTemplate ),

      initialize: function() {
        conCollection.fetch({reset: true});
        this.listenTo(conCollection, 'reset', this.render);
        this.listenTo(conCollection, 'add', this.createContact);

      },
      render: function() {
        this.$el.html( this.template() );
        conCollection.each( function( contact ) {
          this.createContact( contact );
        }, this);
        return this;
      },
      createContact: function(contact) {
        var contactView = new ContactView({ model: contact, parentView: this });
        this.$('#contact-list').append( contactView.render().el );
      }

    });

    return AppView;

});
