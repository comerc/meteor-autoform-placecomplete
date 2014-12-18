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
        formatResult: (result, container, query) ->
          re = new RegExp("(.*?)(" + query.term + ")(.*)", "i")
          m = re.exec(result.text)
          if m
            result.text = m[1] + "<u>" + m[2] + "</u>" + m[3]
          return result.text
        filterResults: (abbreviatedPlaceResult, query) ->
          # BUGFIX: values that do not contain query.term: SAN > "Rissia, Saint Petersburg"
          abbreviatedPlaceResult.description.toUpperCase().indexOf(query.term.toUpperCase()) == -1
        selectDetails: (placeResult) ->
          s0 = placeResult.address_components[0].long_name
          s = s0
          withoutTypes = [
            "postal_code"
            "administrative_area_level_2"
            "administrative_area_level_3"
            "administrative_area_level_4"
          ]
          i = 1
          while i < placeResult.address_components.length
            c = placeResult.address_components[i]
            t = c.types[0]
            if withoutTypes.indexOf(t) is -1
              # BUGFIX: double values: St Petersburg, St Petersburg, Russia
              unless t is "administrative_area_level_1" and c.long_name.indexOf(s0) + 1
                s += ", " + c.long_name
            i++
          s
        requestParams: ->
          country = this.$("select").select2("val")
          result =
            types: ["(cities)"]
          if country
            result.componentRestrictions =
              "country": country
          result

if Meteor.isClient
  AutoForm.setDefaultTemplate("bootstrap3")
