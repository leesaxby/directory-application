define(['backbone'], function(Backbone) {

  var Contact = Backbone.Model.extend({
    defaults: {
      firstname: "",
      lastname: "",
      tel: "",
      email: "",
      visible: true
    }
  })

  return Contact;

})
