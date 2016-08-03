var Alarm = require('./../js/alarm.js').alarmModule;

var currentAlarm;

$(document).ready(function() {
  $("#set-alarm-form").submit(function(event) {
    event.preventDefault();
    var hour = $("#hour").val();
    var minute = $("#minute").val();
    currentAlarm = new Alarm(hour, minute);
    $("#response").text("A new alarm has been set for " + currentAlarm.hour + ":" + currentAlarm.minute);
  });

  $("#check-time").submit(function(event) {
    event.preventDefault();
    var currentHour = moment().hour();
    var response = currentAlarm.isItTime();
    $("#response").text(response);
  });
});
