Template["afPlacecomplete_bootstrap3"].helpers({
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    delete atts.placecompleteOptions;
    return atts;
  }
});

Template["afPlacecomplete_bootstrap3"].rendered = function () {
  var $element = this.$("input");
  $element.placecomplete(this.data.atts.placecompleteOptions || {});
};

Template["afPlacecomplete_bootstrap3"].destroyed = function () {
  // TODO: it is work?
  this.$("input").select2("destroy");
};
