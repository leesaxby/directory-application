define(['backbone', 'models/contact'],
  function(Backbone, Contact) {

    var Contacts = Backbone.Collection.extend({
      model: Contact,
      url: "api/contacts"
    })

    return new Contacts();

})
