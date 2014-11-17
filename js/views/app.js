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
          this.removeEditView();
        }

        this.editView = new EditView({model: contact, parentView: this});
        this.$('#edit-container').html( this.editView.render().el );
        this.$('#edit-container').css('display', 'block');
      },
      search: function() {
        var keyword = this.$('#search').val();
        if( keyword ) {
          conCollection.setVisible( keyword );
        } else {
          conCollection.setVisibleAll()
        }
      },
      removeEditView: function() {
        this.editView.remove();
        this.editView.unbind();
        this.editView = null;
      }

    });

    return AppView;

});
