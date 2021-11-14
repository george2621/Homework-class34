'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const currTime = document.querySelector('.current-time');
  const today = new Date();
  const time =
    today.getHours() + ':' 
    + (today.getMinutes()>10 ? today.getMinutes() : "0"+today.getMinutes()) + ':' 
    + (today.getSeconds()>10?today.getSeconds(): "0" +today.getSeconds());
  console.log(time);
  currTime.textContent = time;
  return time;
}

window.onload = function () {
  setInterval(addCurrentTime, 1000);
};
