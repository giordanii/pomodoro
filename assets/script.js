let start = window.document.getElementById('start')
let reset = window.document.getElementById('reset')
let timer = window.document.getElementById('timer')
start.onclick = twentyFive;
reset.onclick = five;

function twentyFive() {
    var min = 1;
    var sec = 00;
    setInterval(function() {
      timer.innerHTML = min + ":" + sec;
      sec--;
  
      if (sec == -01) {
        min--;
        sec = 59;
  
        if (min == -01 & sec == -01) {
            timer.innerHTML = `<p>Time is up!</p>`;
        }
      }
    }, 1000);
  }

  function five() {
    var min = 5;
    var sec = 00;
    setInterval(function() {
      timer.innerHTML = min + ":" + sec;
      sec--;
  
      if (sec == -01) {
        min--;
        sec = 59;
  
        if (min == 0) {
          timer.innerHTML = `<p>Time is up!</p>`;
        }
      }
    }, 1000);
  }


// // select buttons
// let start = document.getElementById('start');
// let pause = document.getElementById('pause');
// let reset = document.getElementById('reset');

// // store timer
// let remainingTime = 25

// // decrease timer
// let timerLeft

// // check if timer is running
// let isRunning = false;

// //function to start timer
// const startTimer = () => {
//     if(isRunning) {
//         isRunning = true;
//         remainingTime = 25;
//         timer.innerHTML = remainingTime;
//         timerLeft = setInterval(renderTime, 1000);
//     }
// }

// // function to pause timer
// const pauseTimer = () => {
//     isRunning = false;
//     if (timerLeft) {
//         clearInterval(timerLeft);
//     }
// }

// // function to reset timer
// const resetTimer = () => {
//     isRunning = true;
//     clearInterval(timerLeft);
//     remainingTime = 25;
//     timer.innerHTML = remainingTime;
// }

// //onclick events
// start.onclick = startTimer;
// pause.onclick = pauseTimer;
// reset.onclick = resetTimer;

// // function to display time
// const renderTime = () => {
//     remainingTime -= 1;
//     timer.innerHTML = remainingTime;
//     if (remainingTime === 0) {
//         isRunning = false;
//         clearInterval(timerLeft);
//     }
// }