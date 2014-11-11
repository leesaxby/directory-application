define(['jquery', 'underscore', 'backbone', 'collections/contacts', 'views/contact', 'text!templates/app-template.html', 'views/edit'],
  function($, _, Backbone, conCollection, ContactView, appTemplate, EditView) {

    var AppView = Backbone.View.extend({

      template: _.template( appTemplate ),

      events: {
        'keyup #search': 'search'
      },
      initialize: function() {
        conCollection.fetch({reset: true});
        this.listenTo(conCollection, 'reset', this.render);
        this.listenTo(conCollection, 'add', this.renderContact);
      },
      render: function() {
        this.$el.html( this.template() );
        conCollection.each( function( contact ) {
          this.renderContact( contact );
        }, this);
        return this;
      },
      renderContact: function(contact) {
        var contactView = new ContactView({ model: contact, parentView: this });
        this.$('#contact-list').append( contactView.render().el );
      },
      renderEdit: function(contact) {
        if(this.editView) {
          this.editView.remove();
          this.editView = null;
        }
        this.editView = new EditView({model: contact, parentView: this});
        this.$('#edit-container').html( this.editView.render().el );
      },
      search: function() {
        if( this.$('#search').val() ) {
          conCollection.setVisible( this.$('#search').val() );
        }

      }

    });

    return AppView;

});
