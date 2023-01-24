const semiCircles = document.querySelectorAll('.semiCircle');
const miniCircle = document.querySelector('.miniCircleContainer');
const clockNumbers = document.querySelector('.clock');
const clockNumbersInput = document.querySelectorAll('.clockInput');
const start = document.getElementById('start');
const reset = document.getElementById('buttonReset');
const alarme = document.querySelector('audio');


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
    const dys = Math.floor((remaingTime / (1000 * 60 * 60)) / 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    const hrs = Math.floor((remaingTime / (1000 * 60 * 60)) % 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    const mins = Math.floor((remaingTime / (1000 * 60)) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    const secs = Math.ceil((remaingTime / (1000)) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    const secsss = (remaingTime / (1000)) % 60;
  
    if(dys > 0) {
      clockNumbers.innerHTML = ` 
      <div class="clock">
      <div class="clockDaysContainer">
        <h1 id="clockDays">${dys} D</h1>
      </div>
      <input type="text" class="clockInput" placeholder="${hrs}" maxlength="2" disabled>
      <input type="text" class="clockInput" placeholder="${mins}" maxlength="2" disabled>
      <input type="text" class="clockInput" placeholder="${secs}" maxlength="2" disabled>
  
      <style>
        .clockInput {
          cursor: default;
        } 
        .playPause #start {
          cursor: default;
          opacity: 50%;
        }
        .buttons #buttonReset {
          cursor: pointer;
          opacity: 100%;
        }
        .buttons #retangleBarReset {
          opacity: 100%;
        }
      </style>
    `;
    } else if(dys <= 0) {
      clockNumbers.innerHTML = `
      <input type="text" class="clockInput" placeholder="${hrs}" maxlength="2" disabled>
      <input type="text" class="clockInput" placeholder="${mins}" maxlength="2" disabled>
      <input type="text" class="clockInput" placeholder="${secs}" maxlength="2" disabled>
  
      <style>
        .clockInput {
          cursor: default;
        } 
        .playPause #start {
          cursor: default;
          opacity: 50%;
        }
        .buttons #buttonReset {
          cursor: pointer;
          opacity: 100%;
        }
        .buttons #retangleBarReset {
          opacity: 100%;
        }
      </style>
    `;
    }
    start.disabled = true;
    reset.disabled = false;
    alarme.pause();
    alarme.currentTime = 0;

    // if(remaingTime <= 5000) {
    //   semiCircles[0].style.backgroundColor = '#9229d4';
    //   semiCircles[1].style.backgroundColor = '#9229d4';
    //   clockNumbers.style.color = '#9229d4';
    // }
    console.log(secsss, remaingTime)
    console.log( secsss > 0, secsss <= 0.5, remaingTime <= 10)
    if(secsss > 0 && secsss <= 0.9 && remaingTime <= 10) {
      clearInterval(timerLoop);
      alarme.play();
      semiCircles[2].style.display = 'block';
      semiCircles[0].style.transform = 'rotate(0deg)';
      semiCircles[1].style.transform = `rotate(0deg)`;
      miniCircle.style.transform = `rotate(0deg)`;
      start.disabled = false;
      reset.disabled = true;
  
      clockNumbers.innerHTML = `
        <input type="text" class="clockInput" id="hours" placeholder="00" maxlength="2">
        <input type="text" class="clockInput" id="minutes" placeholder="00" maxlength="2">
        <input type="text" class="clockInput" id="seconds" placeholder="00" maxlength="2">
      `;
      clockNumbers.style.color = '#ceade3';
    }else if(secsss <= 0 ) {
      clearInterval(timerLoop);
      semiCircles[2].style.display = 'block';
      semiCircles[0].style.transform = 'rotate(0deg)';
      semiCircles[1].style.transform = `rotate(0deg)`;
      miniCircle.style.transform = `rotate(0deg)`;
      start.disabled = false;
      reset.disabled = true;
  
      clockNumbers.innerHTML = `
        <input type="text" class="clockInput" id="hours" placeholder="00" maxlength="2">
        <input type="text" class="clockInput" id="minutes" placeholder="00" maxlength="2">
        <input type="text" class="clockInput" id="seconds" placeholder="00" maxlength="2">
      `;
      clockNumbers.style.color = '#ceade3';
    }
  }

  reset.addEventListener('click', () => {
    clearInterval(timerLoop);
    alarme.pause();
    alarme.currentTime = 0;
    semiCircles[2].style.display = 'block';
    semiCircles[0].style.transform = 'rotate(0deg)';
    semiCircles[1].style.transform = `rotate(0deg)`;
    miniCircle.style.transform = `rotate(0deg)`;
    start.disabled = false;
    reset.disabled = true;

    clockNumbers.innerHTML = `
      <input type="text" class="clockInput" id="hours" placeholder="00" maxlength="2">
      <input type="text" class="clockInput" id="minutes" placeholder="00" maxlength="2">
      <input type="text" class="clockInput" id="seconds" placeholder="00" maxlength="2">
    `;
  })
})




