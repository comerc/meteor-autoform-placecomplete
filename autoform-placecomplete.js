AutoForm.addInputType("placecomplete", {
  template: "afPlacecomplete",
  contextAdjust: function (context) {
    //can fix issues with some browsers selecting the firstOption instead of the selected option
    context.atts.autocomplete = "off";
    return context;
  }
});

Template.afPlacecomplete.helpers({
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    // TODO: if (style == 'bootstrap3') ...
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    delete atts.placecompleteOptions;
    return atts;
  }
});

Template.afPlacecomplete.rendered = function () {
  // instanciate placecomplete
  this.$("input").placecomplete(this.data.atts.placecompleteOptions || {});
};

Template.afPlacecomplete.destroyed = function () {
  // TODO: it is work?
  this.$("input").select2("destroy");
};
