define(['backbone', 'models/contact'],
  function(Backbone, Contact) {

    var Contacts = Backbone.Collection.extend({
      model: Contact,
      url: "api/contacts",

      setVisible: function(search) {
        var fullname = "",
            keyword = search.toLowerCase();
        this.each(function(contact) {
          fullname = contact.get("firstname").toLowerCase() + " " + contact.get("lastname").toLowerCase();
          if(fullname.search(keyword) === -1) {
            contact.set({visible: false});
          } else {
            contact.set({visible: true});
          }
        });
      },
      setVisibleAll: function() {
        this.each(function(contact) {
          contact.set({visible: true});
        });
      }
    });

    return new Contacts();

});
