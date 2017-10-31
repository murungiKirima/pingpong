$("form#inputForm").submit(function(event) {
  var numbers = parseInt($("input").val());

  for (var index = 1; index <= numbers; index += 1) {
    if (index % 15 == 0) {
      $(".output").append("<li>" + "PingPong" + "</li>");
    } else if (index % 3 == 0) {
      $(".output").append("<li>" + "Ping" + "</li>");
    } else if (index % 5 == 0) {
      $(".output").append("<li>" + "Pong" + "</li>");
    } else {
      $(".output").append("<li>" + index + "</li>");
    }
  }
  event.preventDefault();
});
