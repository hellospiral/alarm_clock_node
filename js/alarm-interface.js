var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {
  $("#set-alarm-form").submit(function(event) {
    event.preventDefault();
    var hour = $("#hour").val();
    var minute = $("#minute").val();
    var newAlarm = new Alarm(hour, minute);
    $("#response").text("A new alarm has been set for " + newAlarm.hour + ":" + newAlarm.minute);
  });
});
