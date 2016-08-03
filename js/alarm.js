function Alarm(hour, minute) {
  this.hour = hour;
  this.minute = minute;
}

Alarm.prototype.isItTime = function() {
  var currentHour = moment().hour();
  var currentMinute = moment().minute();
  var response;
  if (moment().hour(currentHour).isSame(moment().hour(this.hour))) {
    if (moment().minute(currentMinute).isSameOrAfter(moment().minute(this.minute))) {
      response = "<img src='http://www.asimmonslocksmith.com/Pics/LightRedFlash.gif'>";
    } else {
      response = "Alarm set for " + this.hour + ":" + this.minute;
    }
  } else if (moment().hour(currentHour).isAfter(moment().hour(this.hour))) {
    response = "<img src='http://www.asimmonslocksmith.com/Pics/LightRedFlash.gif'>";
  } else if (moment().hour(currentHour).isBefore(moment().hour(this.hour))) {
    response = "Alarm set for " + this.hour + ":" + this.minute;
  }
  return response;
}

exports.alarmModule = Alarm;
