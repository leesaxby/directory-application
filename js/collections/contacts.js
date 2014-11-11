define(['backbone', 'models/contact'],
  function(Backbone, Contact) {

    var Contacts = Backbone.Collection.extend({
      model: Contact,
      url: "api/contacts",

      setVisible: function(keyword) {
        var fullname = "";
        this.each(function(contact) {
          fullname = contact.get("firstname") + " " + contact.get("lastname");
          if(fullname.search(keyword) === -1) {
            contact.set({visible: false});
          } else {
            contact.set({visible: true});
          }
        })
      }

    })

    return new Contacts();

})
