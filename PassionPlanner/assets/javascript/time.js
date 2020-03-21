  //create clock using moment.js to display to user and also update the train schedule (per minute)

  function rollingClock() {
    var clock = moment().format('HH:mm:ss');  //create clock with hours, minutes and seconds format
    $("#time-widget").html("Current time: "+clock); //append time to current-time element
    setTimeout(rollingClock,1000);  //callback every second;
    
  }

  rollingClock();