@Schema = new SimpleSchema
  "filter":
    type: String
    autoform:
      type: "select2"
      placeholder: "Select a country or empty"
      firstOption: false
      select2Options:
        allowClear: true
      options: ->
        [
          label: ""
          value: ""
        ,
          label: "Russian Federation"
          value: "RU"
        ,
          label: "Ukraine"
          value: "UA"
        ,
          label: "United States"
          value: "US"
        ]
  "place":
    type: String
    autoform:
      type: "placecomplete"
      placecompleteOptions:
        # minimumInputLength: 3
        allowClear: true
        requestParams: ->
          country = this.$("select").select2("val")
          result =
            types: ["(cities)"]
          if country
            result.componentRestrictions =
              "country": country
          result
        selectDetails: (placeResult) ->
          $("input[name='place_id']").val(placeResult.place_id)
          return null
  "place_id": # TODO: https://github.com/aldeed/meteor-autoform/issues/549
    type: String
    label: "place_id"
    autoform:
      placeholder: "(as hidden field)"

if Meteor.isClient
  AutoForm.setDefaultTemplate("bootstrap3")
