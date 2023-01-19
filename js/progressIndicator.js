const semiCircles = document.querySelectorAll('.semiCircle');
const miniCircle = document.querySelector('.miniCircleContainer');
const clockNumbers = document.querySelector('.clock');
const clockNumbersInput = document.querySelectorAll('.clockInput');
const start = document.getElementById('start');
const reset = document.getElementById('buttonReset');

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
      <input type="number" class="clockInput" placeholder="${hrs}" max="99" min="0" disabled>
      <input type="number" class="clockInput" placeholder="${mins}" max="99" min="0" disabled>
      <input type="number" class="clockInput" placeholder="${secs}" max="99" min="0" disabled>
  
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
    start.disabled = true;
    reset.disabled = false;

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
      start.disabled = false;
      reset.disabled = true;
  
      clockNumbers.innerHTML = `
        <input type="number" class="clockInput" id="hours" placeholder="00" max="99" min="0">
        <input type="number" class="clockInput" id="minutes" placeholder="00" max="99" min="0">
        <input type="number" class="clockInput" id="seconds" placeholder="00" max="99" min="0">
      `;
      clockNumbers.style.color = '#ceade3';
    }
  }

  reset.addEventListener('click', () => {
    clearInterval(timerLoop);
    semiCircles[2].style.display = 'block';
    semiCircles[0].style.transform = 'rotate(0deg)';
    semiCircles[1].style.transform = `rotate(0deg)`;
    miniCircle.style.transform = `rotate(0deg)`;
    start.disabled = false;
    reset.disabled = true;

    clockNumbers.innerHTML = `
      <input type="number" class="clockInput" id="hours" placeholder="00" max="99" min="0">
      <input type="number" class="clockInput" id="minutes" placeholder="00" max="99" min="0">
      <input type="number" class="clockInput" id="seconds" placeholder="00" max="99" min="0">
    `;
  })
})

let style = document.querySelector('style')
let widthScreen = window.innerWidth;
let heightScreen = window.innerHeight;

style.innerHTML = `
  body {
    width: ${widthScreen}px;
    height: ${heightScreen}px;
  }
`

if(widthScreen <= 590 && widthScreen > 490) {
  style.innerHTML = `
    .clockContainerCircle {
      width: 450px;
      height: 450px;
    }
    .miniCircle {
      width: 25px;
      height: 25px;
    }
    .clockInput {
      width: 135px;
      height: 150px;
      margin-top: 40px;
      font-size: 95px;
    }
    .clockInput::placeholder {
      font-size: 95px;
    }
    .retangleBarClock {
      width: 60px;
      height: 5px;
      margin-top: 4px;
      margin-bottom: 4rem;
    }
    .playPause #start img {
      width: 85%;
    }
    .buttons #buttonReset {
      font-size: 42px;
    }
    .buttons #retangleBarReset {
      width: 60px;
      height: 5px;
      margin-top: 10px;
    }
  `;
} else if(widthScreen <= 490 && widthScreen > 365) {
  style.innerHTML = `
    .clockContainerCircle {
      width: 350px;
      height: 350px;
    }
    .miniCircle {
      width: 20px;
      height: 20px;
    }
    .clockInput {
      width: 100px;
      height: 150px;
      margin-top: 30px;
      font-size: 70px;
    }
    .clockInput::placeholder {
      font-size: 70px;
    }
    .retangleBarClock {
      width: 50px;
      height: 4px;
      margin-top: 0px;
      margin-bottom: 3rem;
    }
    .playPause #start img {
      width: 75%;
    }
    .buttons #buttonReset {
      font-size: 38px;
    }
    .buttons #retangleBarReset {
      width: 50px;
      height: 4px;
      margin-top: 8px;
    }
  `;
} else if(widthScreen <= 365) {
  style.innerHTML = `
    .clockContainerCircle {
      width: 300px;
      height: 300px;
    }
    .miniCircle {
      width: 15px;
      height: 15px;
    }
    .clockInput {
      width: 90px;
      height: 150px;
      margin-top: 30px;
      font-size: 65px;
    }
    .clockInput::placeholder {
      font-size: 65px;
    }
    .retangleBarClock {
      width: 45px;
      height: 3.5px;
      margin-top: 0px;
      margin-bottom: 2rem;
    }
    .playPause #start img {
      width: 68%;
    }
    .buttons #buttonReset {
      font-size: 35px;
    }
    .buttons #retangleBarReset {
      width: 45px;
      height: 3.5px;
      margin-top: 10px;
    }
  `;
}




