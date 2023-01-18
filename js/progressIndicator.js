const semiCircles = document.querySelectorAll('.semiCircle');
const miniCircle = document.querySelector('.miniCircleContainer');
const clockNumbers = document.querySelector('.clock');
const clockNumbersInput = document.querySelectorAll('.clockInput');
const start = document.getElementById('start')


start.addEventListener('click', () => {
  let hr = document.getElementById('hours');
  let min = document.getElementById('minutes');
  let sec = document.getElementById('seconds');


  const hours = hr.value * 3600000;
  const minutes = min.value * 60000;
  const seconds = sec.value * 1000;
  const setTime = hours + minutes + seconds;
  const startTime = Date.now();
  const futureTime = startTime + setTime;



  const timerLoop = setInterval(countDownTimer);
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
      <input type="number" class="clockInput" placeholder="${hrs}" max="99" min="0">
      <input type="number" class="clockInput" placeholder="${mins}" max="99" min="0">
      <input type="number" class="clockInput" placeholder="${secs}" max="99" min="0">
  
      <style>
        // input::-webkit-outer-spin-button,
        // input::-webkit-inner-spin-button {
        //   -webkit-appearance: none;
        //   margin: 0;
        // }
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
      semiCircles[2].style.display = 'block';
      semiCircles[0].style.transform = 'rotate(0deg)';
      semiCircles[1].style.transform = `rotate(0deg)`;
      miniCircle.style.transform = `rotate(0deg)`;
  
      clockNumbers.innerHTML = `
        <input type="number" class="clockInput" id="hours" placeholder="00" max="99" min="0">
        <input type="number" class="clockInput" id="minutes" placeholder="00" max="99" min="0">
        <input type="number" class="clockInput" id="seconds" placeholder="00" max="99" min="0">
      `;
      clockNumbers.style.color = '#ceade3';
    }
  }
})



