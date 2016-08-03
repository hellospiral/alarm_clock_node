$(document).ready(function(){
  var currentTime = moment().hour() + ":" + moment().minute();
  $('#time').text(currentTime);
});
