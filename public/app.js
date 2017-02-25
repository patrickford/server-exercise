"use strict";

$(document).ready(function() {

  $("#name").submit(function(event) {
    event.preventDefault();

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var person = {
      first: firstName,
      last: lastName
    }

    $.ajax({     
      url: "http://localhost:8080/name",
      method: "POST",
      data: JSON.stringify(person),
      contentType: "application/json",
      dataType: "json",
      success: function(result) {
        var output = "The name is " + result.name
        $("#results").append(output);
      },
      error: function(error) {
        $("#results").append("Error")
      }
    });

  });

});