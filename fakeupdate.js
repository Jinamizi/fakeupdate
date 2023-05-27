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


  let count = 95;
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


$(function() {
  // Create a new script element with async attribute and set its source
  $('<script>', {
    async: true,
    src: '//www.google-analytics.com/analytics.js'
  }).appendTo('body'); // Append the script element to the body of the document

  // Assign the ga function to window.ga or create a new one if it doesn't exist
  window.ga = window.ga || function() {
    (ga.q = ga.q || []).push(arguments);
  };
  ga.l = 1 * new Date(); // Set the timestamp for the ga function

  // Create a new Google Analytics tracker with the specified tracking ID and 'auto' parameter
  ga('create', 'UA-45751574-5', 'auto');

  // Send a pageview hit to Google Analytics
  ga('send', 'pageview');
});



