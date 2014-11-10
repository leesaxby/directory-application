define(['backbone', 'models/contact'],
  function(Backbone, Contact) {

    var Contacts = Backbone.Collection.extend({
      model: Contact,
      url: "api/contacts",

      searchFilter: function(keyword) {
        var contactArr = [],
            fullname = "";

        contactArr = this.filter(function(contact) {
          fullname = contact.get("firstname") + " " + contact.get("lastname");
          if( fullname.search(keyword) > -1 ) {
            return contact.get("firstname");
          }
        })
        return contactArr;
      }

    })

    return new Contacts();

})
