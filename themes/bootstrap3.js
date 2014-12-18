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
  var placecompleteOptions = this.data.atts.placecompleteOptions || {};
  // FIXME: border bugfix works only for 150%, but added bug of resize
  // if (!placecompleteOptions.width) {
  //   placecompleteOptions.width = "element";
  // }
  $element.placecomplete(placecompleteOptions);
};

Template["afPlacecomplete_bootstrap3"].destroyed = function () {
  this.$("input").select2("destroy");
};
