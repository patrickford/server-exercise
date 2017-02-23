$(document).ready(function() {

  $("#name").submit(function(event) {
    event.preventDefault();
    console.log("Form was submitted")
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    console.log(firstName + " " + lastName)

    var person = {
      first: firstName,
      last: lastName
    }

    $.ajax({     
      url: "http://localhost:8080/name",
      type: "POST",
      data: person,
      dataType: "json",
      success: function(result) {
        var output = "The name is " + result.name
        $("#results").append(output);
      }
    })    
  });

});