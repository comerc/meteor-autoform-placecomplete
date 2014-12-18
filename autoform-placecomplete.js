AutoForm.addInputType("placecomplete", {
  template: "afPlacecomplete",
  contextAdjust: function (context) {
    //can fix issues with some browsers selecting the firstOption instead of the selected option
    context.atts.autocomplete = "off";
    return context;
  }
});

Template.afPlacecomplete.rendered = function () {
  // instanciate placecomplete
  this.$("input").placecomplete(this.data.atts.placecompleteOptions || {});
};

Template.afPlacecomplete.destroyed = function () {
  this.$("input").select2("destroy");
};
