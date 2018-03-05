$(document).ready(function() {
  $("form#travel").submit(function(event) {

  var temperature = parseInt($("input#temperature").val());
  var distance = parseInt($("input#distance").val());
  var swim = parseInt($("#swim").val());
  var location = parseInt($("#location").val());
  var shoes = parseInt($("#shoes").val());
  var usernameInput = $("input#username").val();

  $(".username").text(usernameInput);

  if (distance < 100) {
    $('#staycation').show();
    $('#cold-weather').hide();
    $('#swim-yes').hide();
    $('#jersey-city').hide();
    $('no-swim').hide();
  } else if (shoes === 2 && location === 1) {
    $('#cold-weather').show();
    $('#staycation').hide();
    $('#swim-yes').hide();
    $('#jersey-city').hide();
    $('no-swim').hide();
  } else if (swim > 3 && location === 2 && shoes >= 3) {
    $('#swim-yes').show();
    $('#staycation').hide();
    $('#no-swim').hide();
    $('#jersey-city').hide();
    $('#cold-weather').hide();
  } else if (shoes === 1 && location === 3  && distance >= 200) {
    $('#jersey-city').show();
    $('#staycation').hide();
    $('#no-swim').hide();
    $('#swim-yes').hide();
    $('#cold-weather').hide();
  } else {
    $('#no-swim').show();
    $('#staycation').hide();
    $('#cold-weather').hide();
    $('#jersey-city').hide();
    $('swim-yes').hide();
  }
    event.preventDefault();
  });
});
