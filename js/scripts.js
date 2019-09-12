$(document).ready(function() {
  $("form#scream-form").submit(function(event) {
    var shoutInput = $("input#shoutInput").val();

    $(".Shout").text(shoutInput.toUpperCase());

    $("#scream").show();

    event.preventDefault();
  });
});
