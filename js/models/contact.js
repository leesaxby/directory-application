define(['backbone'], function(Backbone) {

  var Contact = Backbone.Model.extend({
    defaults: {
      firstname: "",
      lastname: "",
      tel: "",
      email: "",
      visible: true
    },
    stale: ['visible'],
    toJSON: function() {
      return _.omit(this.attributes, this.stale);
    }
  })

  return Contact;

})
