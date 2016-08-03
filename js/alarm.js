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
      response = "It is time!"
    } else {
      response = "It is not time."
    }
  } else if (moment().hour(currentHour).isAfter(moment().hour(this.hour))) {
    response = "It is time!"
  } else if (moment().hour(currentHour).isBefore(moment().hour(this.hour))) {
    response = "It is not time."
  }
  return response;
}

exports.alarmModule = Alarm;
