define(['jquery', 'underscore', 'backbone', 'collections/contacts', 'routers/appRouter', 'views/contact', 'views/edit', 'text!templates/app-template.html'],
  function($, _, Backbone, conCollection, AppRouter, ContactView, EditView, appTemplate) {

    var AppView = Backbone.View.extend({

      template: _.template( appTemplate ),

      events: {
        'keyup #search': 'search'
      },
      initialize: function() {
        conCollection.fetch({reset: true});

        var appRouter = new AppRouter({parentView: this});
        Backbone.history.start();

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
        this.$el.append( this.editView.render().el );
      },
      search: function() {
        var keyword = this.$('#search').val();
        if( keyword ) {
          window.location.hash = '#/search/' + keyword;
          conCollection.setVisible( keyword );
        } else {
          window.location.hash = '';
          conCollection.setVisibleAll();
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
