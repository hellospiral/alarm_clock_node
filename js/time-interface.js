$(document).ready(setInterval(function(){
  var currentTime = moment().hour() + ":" + moment().minute() + ":" + moment().second();
  $('#time').text(currentTime);
}), 500);
