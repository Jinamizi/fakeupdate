$(document).ready(function() {
  // Disable right-click and context menu
  $(document).on('contextmenu', function() { 
    return false;
  });

  $(document).keyup(function(event) {
    if (event.keyCode == 13 || event.keyCode == 8) { //if enter or backspace is pressed
      // Open the blue screen of death page in the current window/tab
      window.open('https://fakeupdate.net/win10ue/bsod.html', '_self');
    }
  });

  //make the screen not sleep
  if ('wakeLock' in navigator) {
    $(document).hover(function(){
      navigator.wakeLock.request(screen);
    });
  } 

  let count = 0;
  $("#timer").text(count);
  const timerInterval = setInterval(updateTimer, getRandomNumber(60000, 300000)); //set interval between 1 and 5 minutes

  function updateTimer() {
    //count = (++count == 100)? getRandomNumber(60, 90) : count;
    if (++count === 100) {count = getRandomNumber(60, 90)}
    $("#timer").text(count);
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

});
