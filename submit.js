$(function() {
  // Like it's 2010.
  $("form").on("submit", function(e) {
    e.preventDefault();
    var o = {};

    $(this)
      .serializeArray()
      .forEach(function(d) {
        if (o[d.name]) {
          o[d.name] += ", " + d.value;
        } else {
          o[d.name] = d.value;
        }
      });

    $("button")
      .text("Sending...")
      .prop("disabled", true);

    axios
      .post(
        "https://us-central1-stable-259400.cloudfunctions.net/mailinglist",
        o
      )
      .then(function(res) {
        $(".fields").html("<p>Your invitation request has been sent.</p>");
      });
  });
});
