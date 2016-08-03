var Alarm = require('./../js/alarm.js').alarmModule;

var currentAlarm;

$(document).ready(function() {
  $("#set-alarm-form").submit(function(event) {
    event.preventDefault();
    var hour = $("#hour").val();
    var minute = $("#minute").val();
    currentAlarm = new Alarm(hour, minute);
  });

  if (currentAlarm != undefined) {
    console.log("not undefined");
  }

  setInterval(function() {
    if (currentAlarm) {
      var response = currentAlarm.isItTime();
      $("#response").html(response);
    }
  }, 500);
});

$(document).ready(setInterval(function(){
  var currentTime = moment().hour() + ":" + moment().minute() + ":" + moment().second();
  $('#time').text(currentTime);
}), 500);
