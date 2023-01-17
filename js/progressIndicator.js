const semiCircles = document.querySelectorAll('.semiCircle');
const miniCircle = document.querySelector('.miniCircleContainer');
const clockNumbers = document.querySelector('.clock');
const clockNumbersInput = document.querySelectorAll('.clockInput');

const hr = 0;
const min = 0;
const sec = 6;

const hours = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = hours + minutes + seconds;
const startTime = Date.now();
const futureTime = startTime + setTime;

const timerLoop = setInterval(countDownTimer);
countDownTimer();

function countDownTimer() {
  const currentTime = Date.now();
  const remaingTime = futureTime - currentTime;
  const angle = (remaingTime / setTime) * 360;


  // barra de progresso
  if(angle > 180) {
    semiCircles[2].style.display = 'none';
    semiCircles[0].style.transform = 'rotate(180deg)';
    semiCircles[1].style.transform = `rotate(${angle}deg)`;
    miniCircle.style.transform = `rotate(${angle}deg)`;
  } else {
    semiCircles[2].style.display = 'block';
    semiCircles[0].style.transform = `rotate(${angle}deg)`;
    semiCircles[1].style.transform = `rotate(${angle}deg)`;
    miniCircle.style.transform = `rotate(${angle}deg)`;
  }


  //numeros do timer
  const hrs = Math.floor((remaingTime / (1000 * 60 * 60)) % 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
  const mins = Math.floor((remaingTime / (1000 * 60)) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
  const secs = Math.ceil((remaingTime / (1000)) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});


  clockNumbers.innerHTML = `
    <input type="number" class="clockInput" placeholder="${hrs}">
    <input type="number" class="clockInput" placeholder="${mins}">
    <input type="number" class="clockInput" placeholder="${secs}">

    <style>
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      .clockInput {
        cursor: default;
      }
    </style>

  `;

  // if(remaingTime <= 5000) {
  //   semiCircles[0].style.backgroundColor = '#9229d4';
  //   semiCircles[1].style.backgroundColor = '#9229d4';
  //   clockNumbers.style.color = '#9229d4';
  // }

  if(remaingTime <= 0) {
    clearInterval(timerLoop);
    semiCircles[0].style.display = 'none';
    semiCircles[1].style.display = 'none';
    semiCircles[2].style.display = 'none';

    clockNumbers.innerHTML = `
      <input type="number" class="clockInput" placeholder="00">
      <input type="number" class="clockInput" placeholder="00">
      <input type="number" class="clockInput" placeholder="00">
    `;
    clockNumbers.style.color = '#ceade3';
  }
}


